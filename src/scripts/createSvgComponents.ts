import {
  consoleLogger,
  createSvgComponents,
  svgComponentTemplateNextjs,
} from "@nvon/node-toolbox";
import {
  GENERATED_SVG_COMPONENTS_DIRECTORY,
  RESOURCES_SVG_DIRECTORY,
} from "./paths";

/*
 * Top-level `await` not usable with ts-node yet, so we need the iife.
 * https://stackoverflow.com/a/65257652/2072165
 */
// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async () => {
  await createSvgComponents(
    RESOURCES_SVG_DIRECTORY,
    GENERATED_SVG_COMPONENTS_DIRECTORY,
    svgComponentTemplateNextjs,
    consoleLogger
  );
})();
