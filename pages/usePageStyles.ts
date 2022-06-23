import { makeStyles } from "tss-react/mui";

/**
 * 🚨
 *
 * I'm just using this because lazy.
 * Structurally, each page should (imo) have its own styling, if any at all.
 */
export const usePageStyles = makeStyles({
  name: "Page",
})((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));
