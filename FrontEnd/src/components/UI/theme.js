import { lime, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#ff7961",
      main: "#BA5624",
      dark: lime[900],
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#ff7961",
      main: "#BA5624",
      dark: "#35403f",
      contrastText: "#000",
    },
    background: {
      default: "#4D2629",
      paper: "#381D2A",
    },
    text: {
      primary: "#ffffff",
      secondary: "#F5F5F5",
      disabled: "#757575",
    },
  },
});
// Blanco: #FFFFFF
//  Blanco humo: #F5F5F5
// Gris: #757575
// Negro carbón: #1E1E1E
// Rojo vino: #381D2A
// Rojo ladrillo: #4D2629
// Naranja quemado: #BA5624
// Naranja claro: #E18F65
// Amarillo pálido: #FCDE9C
// Amarillo claro: #FDEECD

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#ff7961",
      main: "#BA5624",
      dark: lime[900],
      contrastText: "#ffffff",
    },
    secondary: {
      light: "##FCDE9C",
      main: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#FDEECD",
      paper: "#FCDE9C",
    },
    text: {
      primary: "#2a3635",
      secondary: "#2a3635",
      disabled: "rgba(255, 255, 255, 0.5)",
    },
  },
});
