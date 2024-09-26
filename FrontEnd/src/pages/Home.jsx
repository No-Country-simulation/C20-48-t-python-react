import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SearchBar from "../components/SearchBar";
import FloatingAB from "../components/FloatingAB";
import Slider from "../components/Slider/Slider";
import DisplayCategories from "../components/DisplayCategories";
import Footer from "../components/Footer";
import CategoriesBar from "../components/UI/CategoriesBar";
import Divider from "@mui/material/Divider";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { useState, useEffect } from "react";
import useDebouncedFetch from "../hooks/useDebouncedFetch";
import { useAppData } from "../Context/AppDataContext";
import queryToString from "../utils/queryToString";
import { useUser } from "../Context/UserContext";

function Home() {
  const [query, setQuery] = useState({
    titulo: null,
    descripcion: null,
    ingrediente: null,
    dificultad: null,
    categoriaNombres: null,
  });

  const {
    tradicionales,
    loadingTradicionales,
    errorTradicionales,
    pastas,
    loadingPastas,
    errorPastas,
    carnes,
    loadingCarnes,
    errorCarnes,
  } = useAppData();
  const { isLogin, userInfo } = useUser();
  const { data, loading, error } = useDebouncedFetch(queryToString(query));
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    setDisplayData(null);
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
        {!displayData && !loading ? (
          <>
            <Slider
              category="Tradicionales"
              recetas={tradicionales?.content}
              loading={loadingTradicionales}
              error={errorTradicionales}
            />
            <Slider
              category="Pastas"
              recetas={pastas?.content}
              loading={loadingPastas}
              error={errorPastas}
            />
            <Slider
              category="Carnes"
              recetas={carnes?.content}
              loading={loadingCarnes}
              error={errorCarnes}
            />
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
