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
        flexWrap: {
          xs: "wrap",
          sm: "wrap",
          md: "nowrap",
        },
        gap: 1,
        margin: 0,
        padding: 0,
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "flex-start",
        },
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
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "stretch",
          },
          alignItems: "center",
          width: {
            xs: "90%",
            sm: "80%",
            md: "60%",
            lg: "50%",
            xl: "40%",
          },
        }}
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
          justifyContent: "space-evenly",
          alignItems: "center",
          width: {
            xs: "100%",
            sm: "80%",
            md: "60%",
            lg: "50%",
            xl: "40%",
          },
        }}
      >
        <AutoCompleteSelection field="Categoria" />
        <AutoCompleteSelection field="Ingrediente" />
        <AutoCompleteSelection field="Dificultad" />
      </Container>
    </Container>
  );
}
