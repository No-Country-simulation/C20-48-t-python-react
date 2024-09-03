import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";
import FloatingAB from "../components/FloatingAB";
import Hero from "../components/Hero";
import Slider from "../components/Slider/Slider";
import DisplayCategories from "../components/DisplayCategories";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        <Typography sx={{ paddingBlock: 2 }} variant="h4">
          Search for recipes
        </Typography>
        <SearchBar />
        <Slider />
        <DisplayCategories category="Recetas" />
        <DisplayCategories category="Fitness" />
        <FloatingAB />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
