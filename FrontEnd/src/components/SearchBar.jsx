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

export default function SearchBar() {

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ searchTerm, category, ingredient, difficulty });
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleIngredient = (value) => {
    setIngredient(value);
  };

  const handleDifficulty = (value) => {
    setDifficulty(value);
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
            lg: "2fr 3fr 1fr",
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
                  lg: "repeat(3, minmax(170px, 1fr))",
                },
              }}
            >
              <AutoCompleteSelection
                field="Categoria"
                handler={handleCategory}
              />
              <AutoCompleteSelection
                field="Ingrediente"
                handler={handleIngredient}
              />
              <AutoCompleteSelection
                field="Dificultad"
                handler={handleDifficulty}
              />
            </Container>
          </Collapse>
        </Container>
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
          Buscar
        </Button>
      </Container>
    </form>
  );
}
