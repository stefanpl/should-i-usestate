import AddIcon from "@mui/icons-material/Add";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useGlobalTextFieldValue } from "../../../globalState/globalTextFieldValue";
import { addUnicornGlobally } from "../../../helpers/addUnicornGlobally";
import { PageLayoutProps } from "./PageLayoutInterfaces";
import { usePageLayoutStyles } from "./PageLayoutStyles";

export const PageLayout = (props: PageLayoutProps): JSX.Element => {
  const { classes, cx } = usePageLayoutStyles();

  const [value] = useGlobalTextFieldValue();

  return (
    <>
      {props.showHeader && (
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={addUnicornGlobally}
            >
              <AddIcon />
              🦄
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Entered {value.length} characters
            </Typography>
          </Toolbar>
        </AppBar>
      )}
      <Box className={cx(classes.wrapper, props.className)}>
        {props.children}
      </Box>
    </>
  );
};
