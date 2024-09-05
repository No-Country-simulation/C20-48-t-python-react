import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AutoCompleteSelection from "./AutoCompleteSelection";
import Container from "@mui/material/Container";
import FilterIcon from "./UI/FilterIcon";

export default function SearchBar() {
  return (
    <Container
      disableGutters
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        margin: 0,
        padding: 0,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        disableGutters
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 1,
          margin: 0,
          padding: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            width: {
              xs: "100%",
              sm: "30%",
            },
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

        <FilterIcon />
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 1,
          margin: 0,
          padding: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AutoCompleteSelection field="Categoria" />
        <AutoCompleteSelection field="Ingrediente" />
        <AutoCompleteSelection field="Dificultad" />
      </Container>
    </Container>
  );
}
