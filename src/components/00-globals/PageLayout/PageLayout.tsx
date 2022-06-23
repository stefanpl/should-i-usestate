import { Box } from "@mui/material";
import { PageLayoutProps } from "./PageLayoutInterfaces";
import { usePageLayoutStyles } from "./PageLayoutStyles";

export const PageLayout = (props: PageLayoutProps): JSX.Element => {
  const { classes, cx } = usePageLayoutStyles();

  return (
    <Box className={cx(classes.wrapper, props.className)}>{props.children}</Box>
  );
};
