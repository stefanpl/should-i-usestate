import createEmotionServer from "@emotion/server/create-instance";
import Document, { Head, Html, Main, NextScript } from "next/document";
import * as React from "react";
import { withEmotionCache } from "tss-react/nextJs";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";

/**
 * 💡
 * This file is currently a merge between:
 *
 * - the MUI nextjs example:
 *   https://github.com/mui/material-ui/tree/master/examples/nextjs
 *
 * - the tss-react MUI example:
 *   https://docs.tss-react.dev/ssr/next.js
 *
 * Both, for themselves, do not SSR properly.
 *
 * When making adjustments here, be sure to check:
 * - dev build is looking fine
 * - production build is looking fine, with and without javascript
 *
 */

// eslint-disable-next-line es/no-classes
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* PWA primary color */}

          <meta name="theme-color" content={theme.palette.primary.main} />

          <link rel="shortcut icon" href="/static/favicon.ico" />

          {/* Inject MUI styles first to match with the prepend: true configuration. */}

          {
            (this.props as unknown as { emotionStyleTags: JSX.Element })
              .emotionStyleTags
          }
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withEmotionCache({
  // If you have a custom document pass it instead
  Document: MyDocument,
  /*
   * Every emotion cache used in the app should be provided.
   * Caches for MUI should use "prepend": true.
   */
  getCaches: () => [createEmotionCache()],
});

/*
 * `getInitialProps` belongs to `_document` (instead of `_app`),
 * it's compatible with static-site generation (SSG).
 */
MyDocument.getInitialProps = async (ctx) => {
  /*
   * Resolution order
   *
   * On the server:
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. document.getInitialProps
   * 4. app.render
   * 5. page.render
   * 6. document.render
   *
   * On the server with error:
   * 1. document.getInitialProps
   * 2. app.render
   * 3. page.render
   * 4. document.render
   *
   * On the client
   * 1. app.getInitialProps
   * 2. page.getInitialProps
   * 3. app.render
   * 4. page.render
   */

  const originalRenderPage = ctx.renderPage;

  /*
   * You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
   * However, be aware that it can have global side effects.
   */
  const cache = createEmotionCache();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          // This is the MUI default. Still not cool.
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  /*
   * This is important. It prevents emotion to render invalid HTML.
   * See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
   */
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
