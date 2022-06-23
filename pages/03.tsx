import { Box, Grid, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import { UnicornTextField } from "../src/components/02-molecules/UnicornTextField/UnicornTextField";
import { usePageStyles } from "./usePageStyles";

const HelloWorldPage: NextPage = () => {
  const { classes } = usePageStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">
        How to share state between components?
      </Typography>

      <Grid
        container={true}
        direction={"row"}
        justifyContent="center"
        alignItems={"stretch"}
      >
        <Grid item={true}>
          <Paper>
            <UnicornTextField />
          </Paper>
        </Grid>
        <Grid item={true}>
          <Paper>
            <Typography variant="body1">
              We would like to give feedback regarding the text at this point.
            </Typography>
            <Typography variant="h4">But how?</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HelloWorldPage;
