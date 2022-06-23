import { Box, Typography } from "@mui/material";
import { TextEvaluationProps } from "./TextEvaluationInterfaces";
import { useTextEvaluationStyles } from "./TextEvaluationStyles";

export const TextEvaluation = (props: TextEvaluationProps): JSX.Element => {
  const { classes, cx } = useTextEvaluationStyles();

  return (
    <Box className={cx(classes.wrapper, props.className)}>
      <Typography variant="body1">
        You have entered {props.text.length} characters. Keep going!
      </Typography>
    </Box>
  );
};
