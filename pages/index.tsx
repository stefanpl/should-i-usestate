import { Box, Button, Paper } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { allZero } from "@nvon/react-toolbox";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";
import { RocketStart } from "../src/generated/svg-components/RocketStart";

const Home: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ p: 2, mt: 2, mb: 2 }}>
        <Typography variant="h1">Hello World</Typography>
        <Typography variant="h2">Now start creating </Typography>
      </Paper>
      <Button sx={{ mr: 2 }}>Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Box>
        <Image src={"/images/marrakesh.jpg"} layout="fill" />
      </Box>
      <Box
        sx={{
          position: "fixed",
          opacity: 0.02,
          textAlign: "center",
          ...allZero,
          "& svg": { height: "100%" },
        }}
      >
        <RocketStart />
      </Box>
    </Container>
  );
};

export default Home;
