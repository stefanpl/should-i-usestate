import { Box, Typography } from "@mui/material";
import { ___componentName___Props } from "./___ComponentName___Interfaces";
import { use___ComponentName___Styles } from "./___componentName___Styles";

export const ___Component_Name___ = (
  props: ___componentName___Props
): JSX.Element => {
  const { classes, cx } = use___ComponentName___Styles();

  return (
    <Box className={cx(classes.wrapper, props.className)}>
      <Typography variant="h2">___ComponentName___</Typography>
    </Box>
  );
};
