import { Box, Grid, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import { DumbUnicornTextField } from "../src/components/02-molecules/DumbUnicornTextField/UnicornTextField";
import { usePageStyles } from "./usePageStyles";

const HelloWorldPage: NextPage = () => {
  const { classes } = usePageStyles();
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">By lifting state up!</Typography>

      <Grid
        container={true}
        direction={"row"}
        justifyContent="center"
        alignItems={"stretch"}
      >
        <Grid item={true}>
          <Paper>
            <DumbUnicornTextField {...{ textFieldValue, setTextFieldValue }} />
          </Paper>
        </Grid>
        <Grid item={true}>
          <Paper>
            <Typography variant="body1">
              You have entered {textFieldValue.length} characters. Keep going!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelloWorldPage;
