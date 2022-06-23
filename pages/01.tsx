import { TextField, Typography } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";

const HelloWorldPage: NextPage = () => {
  const [textFieldValue, setTextFieldValue] = React.useState<string>("");

  return (
    <>
      <Typography variant="h1">hello world</Typography>

      <TextField
        multiline={true}
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
      />
    </>
  );
};

export default HelloWorldPage;
