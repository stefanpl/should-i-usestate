import { Box, Typography } from "@mui/material";
import { ExampleComponentProps } from "./ExampleComponentInterfaces";
import { useExampleComponentStyles } from "./ExampleComponentStyles";

export const ExampleComponent = (props: ExampleComponentProps): JSX.Element => {
  const { classes, cx } = useExampleComponentStyles();

  return (
    <Box className={cx(classes.wrapper, props.className)}>
      <Typography variant="h2">Hello {props.name}</Typography>
    </Box>
  );
};
