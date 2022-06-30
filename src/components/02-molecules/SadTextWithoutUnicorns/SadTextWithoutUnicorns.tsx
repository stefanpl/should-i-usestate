import { Box, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SadTextWithoutUnicornsProps } from "./SadTextWithoutUnicornsInterfaces";
import { useSadTextWithoutUnicornsStyles } from "./SadTextWithoutUnicornsStyles";

export const SadTextWithoutUnicorns = (
  props: SadTextWithoutUnicornsProps
): JSX.Element => {
  const { classes, cx } = useSadTextWithoutUnicornsStyles();

  const [text, setText] = useState<string>(props.text);

  useEffect(() => {
    setText(text.replace(/🦄/g, "").trim());
  }, [setText, text]);

  return (
    <Box className={cx(classes.wrapper, props.className)}>
      <TextField multiline={true} disabled={true} value={text} />
    </Box>
  );
};
