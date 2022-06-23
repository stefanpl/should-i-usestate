import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import { usePageStyles } from "./usePageStyles";

const addUnicornToText = (text: string): string => `${text} 🦄`;

const HelloWorldPage: NextPage = () => {
  const { classes } = usePageStyles();

  // This is our source of truth, used in multiple places
  const [textFieldValue, setTextFieldValue] = React.useState<string>("");

  const addUnicorn = () => setTextFieldValue(addUnicornToText);

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">Single source of truth</Typography>

      <FormControl>
        <TextField
          multiline={true}
          rows={5}
          value={textFieldValue}
          onChange={(e) => setTextFieldValue(e.target.value)}
        />
        <FormHelperText>
          You have entered {textFieldValue.length} characters.
        </FormHelperText>
      </FormControl>

      <ButtonGroup variant="contained">
        <Button onClick={() => setTextFieldValue("")}>
          Start from scratch
        </Button>

        <Button onClick={addUnicorn}>Add 🦄</Button>
      </ButtonGroup>
    </Box>
  );
};

export default HelloWorldPage;
