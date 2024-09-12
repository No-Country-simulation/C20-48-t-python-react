import InputAdornment from "@mui/material/InputAdornment";
import FilterIcon from "./UI/FilterIcon";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AutoCompleteSelection from "./AutoCompleteSelection";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useRef } from "react";

const dificulty = ["Facil", "Normal", "Dificil"];

const categories = [
  "Cocina",
  "Cafe",
  "Cervezas",
  "Comida",
  "Vinos",
  "Pastas",
  "Desayunos",
  "Ensaladas",
  "Hamburguesas",
  "Carnes",
  "Pescados",
  "Entradas",
  "Sopas",
  "Postres",
  "Bebidas",
  "Snacks",
];

const ingredients = [
  "Arroz",
  "Pollo",
  "Carne",
  "Cerdo",
  "Pescado",
  "tomate",
  "pepino",
  "ajo",
  "cebolla",
  "oreganos",
];

export default function SearchBar({ query, setQuery }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({
      searchTerm: null,
      category: null,
      difficulty: null,
      ingredient: null,
    });
    console.log({ query });
  };
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setQuery({ ...query, searchTerm: null });
      return;
    }
    setQuery({ ...query, searchTerm: e.target.value });
  };

  const handleCategory = (value) => {
    setQuery({ ...query, category: value });
  };

  const handleIngredient = (value) => {
    setQuery({ ...query, ingredient: value });
  };

  const handleDifficulty = (value) => {
    setQuery({ ...query, difficulty: value });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  function handleFilterToggle() {
    setOpen(!open);
    if (ref.current) {
      ref.current.style.display = open ? "none" : "grid";
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          paddingBlock: 2,
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            lg: "2fr 3fr ",
          },
          justifyItems: "start",
        }}
      >
        <Container
          disableGutters
          sx={{ display: "flex", flexDirection: "row", gap: 2 }}
        >
          <TextField
            j
            sx={{
              width: "100%",
            }}
            placeholder="Buscar recetas..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
          <IconButton onClick={handleFilterToggle}>
            <FilterIcon />
          </IconButton>
        </Container>
        <Container
          disableGutters
          ref={ref}
          sx={{ display: "none", width: "100%" }}
        >
          <Collapse
            in={open}
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            <Container
              disableGutters
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "repeat(3, minmax(165px,1fr)) 50px",
                },
              }}
            >
              <AutoCompleteSelection
                field="Categoria"
                options={categories}
                value={query.category}
                handler={handleCategory}
              />
              <AutoCompleteSelection
                field="Ingrediente"
                value={query.ingredient}
                options={ingredients}
                handler={handleIngredient}
              />
              <AutoCompleteSelection
                field="Dificultad"
                value={query.difficulty}
                options={dificulty}
                handler={handleDifficulty}
              />
              <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  width: {
                    xs: "100%",
                    lg: "max-content",
                  },
                }}
              >
                Limpiar
              </Button>
            </Container>
          </Collapse>
        </Container>
      </Container>
    </form>
  );
}
