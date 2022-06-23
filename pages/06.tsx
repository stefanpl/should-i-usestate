import BugReportIcon from "@mui/icons-material/BugReport";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { DumbUnicornTextField } from "../src/components/02-molecules/DumbUnicornTextField/UnicornTextField";
import { usePageStyles } from "./usePageStyles";

/**
 * 🚨
 *
 * There are multiple propblems within this page that should be taken care of.
 *
 * This is not "copy-paste-code" meant for using anywhere else.
 *
 */

interface TextLengthFeedback {
  minLenght: number;
  text: string;
  canBeSubmitted?: boolean;
}

const textLenghtFeedbacks: TextLengthFeedback[] = [
  {
    minLenght: 0,
    text: "Start entering some text 🙃",
  },
  {
    minLenght: 1,
    text: "Keep going 😎",
  },
  {
    minLenght: 10,
    canBeSubmitted: true,
    text: "You're on a roll 👍",
  },
  {
    minLenght: 20,
    canBeSubmitted: true,
    text: "Wow 🤩",
  },
  {
    minLenght: 30,
    text: "A bit too much probably … 🤔",
  },
];

const getFeedbackForLenght = (length: number): TextLengthFeedback => {
  const firstNonMatchingIndex = textLenghtFeedbacks.findIndex(
    ({ minLenght }) => minLenght > length
  );

  const matchingFeedback =
    textLenghtFeedbacks[firstNonMatchingIndex - 1] ||
    textLenghtFeedbacks.at(-1);

  return matchingFeedback;
};

const getFeedbackText = (text: string): string =>
  getFeedbackForLenght(text.length).text;

const textCanBeSubmitted = (text: string): boolean =>
  !!getFeedbackForLenght(text.length).canBeSubmitted;

const HelloWorldPage: NextPage = () => {
  const { classes } = usePageStyles();
  const [textFieldValue, setTextFieldValue] = useState<string>("");

  const [evaluationText, setEvaluationText] = useState<string>(
    getFeedbackText("")
  );

  const [isReadyToSubmit, setIsReadyToSubmit] = useState<boolean>(false);

  const setTextFieldValueEnhanced = useCallback((newValue: string): void => {
    setTextFieldValue(newValue);
    setEvaluationText(getFeedbackText(newValue));
  }, []);

  useEffect(() => {
    const canBeSubmitted = textCanBeSubmitted(textFieldValue);

    setIsReadyToSubmit(canBeSubmitted);
  }, [textFieldValue]);

  const addSomeBug = useCallback(() => {
    setTextFieldValue(textFieldValue + " 🐞");
  }, [textFieldValue]);

  // Nevermind this
  const save = () => alert("saving!");

  return (
    <Box className={classes.wrapper}>
      <Typography variant="h1">Providing user feedback</Typography>

      <Grid
        container={true}
        direction={"row"}
        position="relative"
        justifyContent="center"
        alignItems={"stretch"}
      >
        <Grid item={true}>
          <Paper>
            <DumbUnicornTextField
              textFieldValue={textFieldValue}
              setTextFieldValue={setTextFieldValueEnhanced}
            />
          </Paper>
        </Grid>
        <Grid item={true}>
          <Paper>
            <Typography variant="body1">
              You have entered {textFieldValue.length} characters.
            </Typography>
            <Typography variant="h5">{evaluationText}</Typography>

            <Button
              sx={{ mt: 2 }}
              variant="outlined"
              onClick={addSomeBug}
              endIcon={<BugReportIcon />}
            >
              Add bug
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Button color="secondary" onClick={save} disabled={!isReadyToSubmit}>
        Save
      </Button>
    </Box>
  );
};

export default HelloWorldPage;
