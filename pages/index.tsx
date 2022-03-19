import { Button, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 2, mt: 2, mb: 2 }}>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Now start creating</Typography>
      </Paper>
      <Button sx={{ mr: 2 }}>Primary</Button>
      <Button color="secondary">Secondary</Button>
    </Container>
  );
};

export default Home;
