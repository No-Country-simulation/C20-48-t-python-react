import { lime, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#757ce8",
      main: lime[500],
      dark: lime[900],
      contrastText: grey[900],
    },
    secondary: {
      light: "#ff7961",
      main: "#3d4847",
      dark: "#35403f",
      contrastText: "#000",
    },
    background: {
      default: "#2a3635",
      paper: "#2a3635",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#757ce8",
      main: "#2a3635",
      dark: lime[900],
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ff7961",
      main: "#3d4847",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#DBD8B3",
      paper: "#8E9180",
    },
    text: {
      primary: "#2a3635",
      secondary: "#2a3635",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
  },
});
