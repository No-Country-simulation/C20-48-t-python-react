import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";
import SearchBar from "./components/SearchBar";
import FloatingAB from "./components/FloatingAB";
import Typography from "@mui/material/Typography";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import DisplayCategories from "./components/DisplayCategories";
import Slider from "./components/Slider/Slider";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./components/UI/theme";
import { useState } from "react";

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
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        <Typography sx={{ paddingBlock: 2 }} variant="h4">
          Search for recipes
        </Typography>
        <SearchBar />
        <Slider />
        <DisplayCategories category="Recetas" />
        <DisplayCategories category="Fitness" />
        <FloatingAB></FloatingAB>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
