import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";
import FloatingAB from "../components/FloatingAB";
import Hero from "../components/Hero";
import Slider from "../components/Slider/Slider";
import DisplayCategories from "../components/DisplayCategories";
import Footer from "../components/Footer";
import CategoriesBar from "../components/UI/CategoriesBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        <Typography sx={{ paddingBlock: 2 }} variant="h4">
          Buscar recetas...
        </Typography>
        <SearchBar />
        <CategoriesBar />
        <Slider />
        <DisplayCategories category="Recetas" />
        <DisplayCategories category="Fitness" />
        <Link to="/editar-receta" style={{ textDecoration: "none" }}>
        <FloatingAB />
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
