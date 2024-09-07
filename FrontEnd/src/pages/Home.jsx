import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";
import FloatingAB from "../components/FloatingAB";
import Hero from "../components/Hero";
import Slider from "../components/Slider/Slider";
import DisplayCategories from "../components/DisplayCategories";
import Footer from "../components/Footer";
import CategoriesBar from "../components/UI/CategoriesBar";
import Divider from "@mui/material/Divider";

function Home() {
  return (
    <>
      <Hero />
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        <Container
          maxWidth={"xl"}
          sx={{
            borderRadius: "10px",
            boxShadow: " 0 0 6px 5px rgba(0, 0, 0, 0.1)", // Ajusta el box-shadow para el efecto de desvanecimiento
            backgroundColor: "background.paper",
          }}
        >
          <Typography sx={{ paddingBlock: 2, paddingTop: 4 }} variant="h4">
            Buscar recetas...
          </Typography>
          <SearchBar />
          <Divider sx={{ marginBlock: 2 }} />
          <CategoriesBar />
        </Container>
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
