import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/800.css";
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
      main: "#f46524",
    },
    secondary: {
      main: "#50c6bc",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: "Open Sans, Verdana, Geneva, sans-serif",
    fontWeightRegular,
    fontWeightLight,
    fontWeightBold,
    h1: {
      fontWeight: fontWeightLight,
      marginBottom: "2rem",
      fontSize: "3rem",
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
  MuiPaper: {
    styleOverrides: {
      root: {
        padding: "2rem",
        margin: "2rem",
      },
    },
    defaultProps: {
      elevation: 10,
    },
  },
  MuiGrid: {
    defaultProps: {
      flex: 1,
    },
  },
  MuiButton: {
    defaultProps: {
      variant: "contained",
    },
    styleOverrides: {
      root: {
        cursor: "pointer",
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        padding: 0,
      },
    },
  },
  MuiButtonGroup: {
    styleOverrides: {
      root: {
        marginTop: "1rem",
      },
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
