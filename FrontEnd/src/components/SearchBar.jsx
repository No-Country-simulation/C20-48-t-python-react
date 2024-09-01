import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AutoCompleteSelection from "./AutoCompleteSelection";
import Container from "@mui/material/Container";

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
        justifyContent: "start",
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
        placeholder="Search for products"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <AutoCompleteSelection field="Etiqueta" />
      <AutoCompleteSelection field="Ingrediente" />
    </Container>
  );
}
