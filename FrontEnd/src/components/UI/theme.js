import { lime, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#ff7961",
      main: "#BA5624",
      dark: "#E18F65",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#ff7961",
      main: "#BA5624",
      dark: "#35403f",
      contrastText: "#000",
    },
    background: {
      default: "#381d2a",
      //default: "#513e47",
      paper: "#4d2629",
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
      light: "#381D2A",
      // main: "#475f55",
      main: "#381D2A",
      dark: "#E18F65",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "##FCDE9C",
      main: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000",
    },
    background: {
      default: "#fdeecd",
      paper: "#ffffff",
    },
    text: {
      primary: "#1E1E1E",
      secondary: "#2a3635",
      disabled: "#757575",
    },
  },
});
