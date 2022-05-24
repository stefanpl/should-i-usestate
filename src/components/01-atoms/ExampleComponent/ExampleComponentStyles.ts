import { makeStyles } from "tss-react/mui";

export const useExampleComponentStyles = makeStyles({
  name: "ExampleComponent",
})((theme) => ({
  wrapper: {
    zIndex: 100,
  },
}));
