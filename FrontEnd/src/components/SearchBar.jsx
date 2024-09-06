import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AutoCompleteSelection from "./AutoCompleteSelection";
import Container from "@mui/material/Container";
import FilterIcon from "./UI/FilterIcon";
import Collapse from "@mui/material/Collapse";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  function handleFilterToggle() {
    setOpen(!open);
  }
  return (
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        width: "100vw",
        paddingBlock: 2,
        display: "grid",
        gap: 2,
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 2fr",
        },
        justifyItems: "center",
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
        />
        <IconButton onClick={handleFilterToggle}>
          <FilterIcon />
        </IconButton>
      </Container>
      <Container disableGutters sx={{ width: "100%" }}>
        <Collapse orientation="horizontal" in={open}>
          <Fade in={open}>
            <Container
              disableGutters
              sx={{
                display: "grid",
                width: "100%",
                gap: 2,
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(3, 200px)",
                },
              }}
            >
              <AutoCompleteSelection field="Categoria" />
              <AutoCompleteSelection field="Ingrediente" />
              <AutoCompleteSelection field="Dificultad" />
            </Container>
          </Fade>
        </Collapse>
      </Container>
    </Container>
  );
}
