import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/800.css";
import { colors } from "@mui/material";
import {
  Breakpoint,
  Components,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { DefaultTheme } from "@mui/system";

export const mobileMenuBreakpoint: Breakpoint = "lg";

const fontWeightRegular = 400;
const fontWeightLight = 300;
const fontWeightBold = 800;

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colors.teal[800],
    },
    secondary: {
      main: colors.orange[800],
    },
  },
  typography: {
    fontFamily: "Open Sans, Verdana, Geneva, sans-serif",
    fontWeightRegular,
    fontWeightLight,
    fontWeightBold,
    h1: {
      fontWeight: fontWeightLight,
    },
    h2: {
      fontWeight: fontWeightBold,
    },
    body1: {
      fontSize: "1.2rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  spacing: (factor: number) => `${1 * factor}rem`,
});

const components: Components<DefaultTheme> = {
  MuiTypography: {
    styleOverrides: {},
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
  },
};

const themeFull = {
  ...theme,
  components,
};

const themeWithResponsiveFontSizes = responsiveFontSizes(themeFull, {
  factor: 3,
  breakpoints: ["xs", "sm", "md", "lg", "xl"],
});

export default themeWithResponsiveFontSizes;
