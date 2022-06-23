import { makeStyles } from "tss-react/mui";

export const usePageLayoutStyles = makeStyles({
  name: "PageLayout",
})((theme) => ({
  wrapper: {
    padding: theme.spacing(4),
  },
}));
