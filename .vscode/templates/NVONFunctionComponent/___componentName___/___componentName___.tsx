import { Box, Typography } from "@mui/material";
import { ___ComponentName___Props } from "./___ComponentName___Interfaces";
import { use___ComponentName___Styles } from "./___ComponentName___Styles";
import { use___ComponentName___ViewModel } from "./___ComponentName___ViewModel";

export const ___Component_Name___ = (
  props: ___ComponentName___Props
): JSX.Element => {
  const viewModel = use___ComponentName___ViewModel(props);
  const { classes, cx } = use___ComponentName___Styles();

  return (
    <Box className={cx(classes.wrapper, props.className)}>
      <Typography variant="h2">___ComponentName___</Typography>
    </Box>
  );
};
