import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";
import FloatingAB from "../components/FloatingAB";
// import Hero from "../components/Hero";
import Slider from "../components/Slider/Slider";
import DisplayCategories from "../components/DisplayCategories";
import Footer from "../components/Footer";
import CategoriesBar from "../components/UI/CategoriesBar";
import Divider from "@mui/material/Divider";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { useContext, useState, useEffect } from "react";
import { RecipeListContext } from "../Context/RecipeContext";
import useDebouncedFetch from "../hooks/useDebouncedFetch";
import queryToString from "../utils/queryToString";
import { useUser } from "../Context/UserContext";
import CardSkeletons from "../components/skeletons/CardSkeletons";

function Home() {
  const [query, setQuery] = useState({
    titulo: null,
    descripcion: null,
    ingrediente: null,
    dificultad: null,
    categoriaNombres: null,
  });

  const { recipes } = useContext(RecipeListContext);
  const { isLogin, userInfo } = useUser();
  const { data, loading, error } = useDebouncedFetch(queryToString(query));
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (Object.values(query).every((value) => value === null)) {
      setDisplayData(null);
    } else {
      setDisplayData(data);
    }
  }, [query, data]);

  return (
    <>
      <Container maxWidth={"xl"} sx={{ mt: 4 }}>
        {/* <Hero /> */}
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
          <SearchBar query={query} setQuery={setQuery} />
          <Divider sx={{ marginBlock: 2 }} />
          <CategoriesBar
            selectedCategory={query}
            setSelectedCategory={setQuery}
          />
        </Container>
        {!displayData ? (
          <>
            <Slider category="Tradicionales" recetas={recipes} />
            <Slider category="Desayunos" recetas={recipes} />
            <Slider category="Asiatica" recetas={recipes} />
            <Slider category="Mexicana" recetas={recipes} />
          </>
        ) : (
          <DisplayCategories
            recetas={displayData?.content}
            loading={loading}
            category={query}
          />
        )}
        {isLogin && <FloatingAB />}
      </Container>
      {error && <div>Error</div>}
      <Footer />
    </>
  );
}

export default Home;
