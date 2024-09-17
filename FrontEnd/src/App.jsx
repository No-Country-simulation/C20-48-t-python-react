import { ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "./Context/UserContext";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./components/UI/theme";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KeepAlive from "./components/KeepAlive";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
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
import { Helmet, HelmetProvider } from "react-helmet-async";
import ollita from "./assets/ollita.svg";
import ollitalight from "./assets/ollitalight.svg";

export default function App() {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme === "light") {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  }, []);

  const ollitaSrc = theme.palette.mode === "light" ? ollitalight : ollita;

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme.palette.mode);
      return newTheme;
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "light" ? `url(${fondo})` : `url(${fondo2})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          zIndex: -1,
        }}
      >
        <BrowserRouter>
          <UserProvider>
            <Navbar toggleTheme={toggleTheme} />
            <HelmetProvider>
              <Helmet>
                <title>RecetApp</title>
                <meta name="description" content="RecetApp" />
                <link rel="icon" href={ollitaSrc} />
              </Helmet>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/detalle-receta" element={<RecipeDetail />} />
                <Route path="/detalle-receta/:id" element={<RecipeDetail />} />
                <Route path="/editar-receta" element={<RecipeEdit />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil" element={<Profile />} />
                <Route path="/mis-recetas" element={<MyRecipes />} />
                <Route path="/favoritos" element={<Favourites />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HelmetProvider>
          </UserProvider>
        </BrowserRouter>
        <KeepAlive />
      </Box>
    </ThemeProvider>
  );
}
