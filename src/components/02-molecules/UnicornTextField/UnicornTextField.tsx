import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { addUnicornToText } from "../../../helpers/addUnicornToText";
import { UnicornTextFieldProps } from "./UnicornTextFieldInterfaces";
import { useUnicornTextFieldStyles } from "./UnicornTextFieldStyles";

export const UnicornTextField = (props: UnicornTextFieldProps): JSX.Element => {
  const { classes, cx } = useUnicornTextFieldStyles();
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const addUnicorn = () => setTextFieldValue(addUnicornToText);

  return (
    <Box className={cx(classes.wrapper, props.className)}>
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
