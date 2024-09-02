import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./components/UI/theme";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import RecipeEdit from "./pages/RecipeEdit";



export default function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/DetalleReceta" element={<RecipeDetail />} />
          <Route path="/EditarReceta" element={<RecipeEdit />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Registro" element={<Register/>} />
          <Route path="/Perfil" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
