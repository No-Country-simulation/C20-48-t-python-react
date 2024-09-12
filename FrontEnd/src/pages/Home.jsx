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
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { useContext, useState } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import { recetas } from "../assets/recetas";
import { UserContext } from "../Context/UserContext";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { recipes, setRecipes } = useContext(RecipeListContext);
  const {isLogin} = useContext(UserContext);

  return (
    <>
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        <Hero />
        <Container
          maxWidth={"xl"}
          sx={{
            borderRadius: "10px",
            boxShadow: 2,
            backgroundColor: "background.paper",
          }}
        >
          <Typography
            sx={{
              paddingBlock: 2,
              paddingTop: 4,
              width: "100%",
              display: "inline-flex",
              alignItems: "center",
            }}
            variant="h4"
          >
            Buscar recetas
            <RamenDiningIcon fontSize="large" sx={{ ml: 3 }} />
          </Typography>
          <SearchBar />
          <Divider sx={{ marginBlock: 2 }} />
          <CategoriesBar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Container>
        {selectedCategory !== "all" ? (
          <DisplayCategories recetas={recetas} category={selectedCategory} />
        ) : (
          <>
            <Slider category="Fitness" recetas={recetas} />
            <Slider category="Desayunos" recetas={recetas} />
            <Slider category="China" recetas={recetas} />
            <Slider category="Mexicana" recetas={recetas} />
          </>
        )}
        {isLogin && <FloatingAB />}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
