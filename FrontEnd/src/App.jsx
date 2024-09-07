import { ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "./Context/UserContext";
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
import Box from "@mui/material/Box";
import fondo from "./assets/fondoapp.png";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={
          {
            backgroundImage: `url(${fondo})`,
            backgroundSize: "contain",
            backgroundPosition: "repeat",
            zIndex: -1
          }
        }
      >
          <BrowserRouter>

        <UserProvider>
            <Navbar toggleTheme={toggleTheme} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/detalle-receta" element={<RecipeDetail />} />
              <Route path="/editar-receta" element={<RecipeEdit />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Register />} />
              <Route path="/perfil" element={<Profile />} />
            </Routes>
        </UserProvider>

          </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
