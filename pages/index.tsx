import { TextField } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";

const Home: NextPage = () => {
  const [textFieldValue, setTextFieldValue] = React.useState<string>("");

  return (
    <TextField
      multiline={true}
      value={textFieldValue}
      onChange={(e) => setTextFieldValue(e.target.value)}
    />
  );
};

export default Home;
