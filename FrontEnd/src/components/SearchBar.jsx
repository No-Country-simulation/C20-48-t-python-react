import InputAdornment from "@mui/material/InputAdornment";
import FilterIcon from "./UI/FilterIcon";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AutoCompleteSelection from "./AutoCompleteSelection";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import SearchbarSkeleton from "./skeletons/SearchbarSkeleton";
import { useTheme, useMediaQuery } from "@mui/material";
import { useState, useRef } from "react";
import { useAppData } from "../Context/AppDataContext";

const ingredients = [
  "arroz",
  "pollo",
  "carne",
  "cerdo",
  "pescado",
  "tomate",
  "pepino",
  "ajo",
  "cebolla",
  "oregano",
];

export default function SearchBar({ query, setQuery }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const { categorias, categoriasLoading, categoriasError } = useAppData();

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({
      titulo: null,
      descripcion: null,
      ingrediente: null,
      dificultad: null,
      categoriaNombres: null,
    });
    console.log({ query });
  };
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setQuery({ ...query, titulo: null });
      return;
    }
    setQuery({ ...query, titulo: e.target.value });
  };

  const handleCategory = (value) => {
    setQuery({ ...query, categoriaNombres: value });
  };

  const handleIngredient = (value) => {
    setQuery({ ...query, ingrediente: value });
  };

  const handleDifficulty = (value) => {
    setQuery({ ...query, dificultad: value });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  function handleFilterToggle() {
    setOpen(!open);
    if (ref.current) {
      ref.current.style.display = open ? "none" : "grid";
    }
  }

  if (categoriasLoading) {
    return <SearchbarSkeleton />;
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
            sx={{
              width: "100%",
            }}
            placeholder="Buscar recetas..."
            value={query.titulo}
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
                options={categorias.map(({ id, nombre }) => nombre)}
                value={query.categoriaNombres}
                handler={handleCategory}
              />
              <AutoCompleteSelection
                field="Ingrediente"
                value={query.ingrediente}
                options={ingredients}
                handler={handleIngredient}
              />
              <AutoCompleteSelection
                field="Dificultad"
                value={query.dificultad}
                options={["facil", "medio", "dificil"]}
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
