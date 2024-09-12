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
import Favourites from "./pages/Favourites";
import About from "./pages/About";
import MyRecipes from "./pages/MyRecipes";
import Box from "@mui/material/Box";
import fondo from "./assets/fondoapp.png";
import fondo2 from "./assets/fondoapp2.png";

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
      <Box
        sx={{
          backgroundImage: theme.palette.mode === 'light' ? `url(${fondo})` : `url(${fondo2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          zIndex: -1,
        }}
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
              <Route path="/mis-recetas" element={<MyRecipes />} />
              <Route path="/favoritos" element={<Favourites />} />
              <Route path="/about" element={<About />} />
              <Route path="/detalle-receta/:id" element={<RecipeDetail />} />
            </Routes>
          </UserProvider>
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}
