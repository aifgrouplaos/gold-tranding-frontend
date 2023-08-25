import { createTheme } from "@mui/material/styles";
const createtheme = createTheme({
  palette: {
    primary: {
      main: "#12214A",
      light: "#CAD8FE",
      dark: "#041136",
      contrastText: "#fff",
    },
    secondary: {
      main: "#FFC630",
      light: "#FFC630",
      dark: "#FFC730",
      contrastText: "#212121",
    }, 
    success: {
      main: "#30F076",
      light: "#EBFFF0",
      dark: "#00C853",
      contrastText: "#fff",
    },
    error: {
      main: "#FC4242",
      light: "#F3DBDE",
      dark: "#E71D36",
      contrastText: "#fff",
    }, 
    warning: {
      main: "#FF9900",
      light: "#FFEFD7",
      dark: "#E18904",
      contrastText: "#212121",
    }, 
    info: {
      main: "#42c5f5",
      light: "#42c5f5",
      dark: "#42c5f5",
      contrastText: "#212121",
    },   
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }, 
});

export default createtheme;
