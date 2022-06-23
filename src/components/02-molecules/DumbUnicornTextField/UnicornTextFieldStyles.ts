import { makeStyles } from "tss-react/mui";

export const useUnicornTextFieldStyles = makeStyles({
  name: "UnicornTextField",
})((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));
