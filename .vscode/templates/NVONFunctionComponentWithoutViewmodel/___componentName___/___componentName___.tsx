import { Box, Typography } from "@mui/material";
import { ___componentName___Props } from "./___ComponentName___Interfaces";
import { use___ComponentName___Styles } from "./___componentName___Styles";

const ___Component_Name___ = (props: ___componentName___Props): JSX.Element => {
  const classes = use___ComponentName___Styles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h2">___ComponentName___</Typography>
    </Box>
  );
};

export default ___Component_Name___;
