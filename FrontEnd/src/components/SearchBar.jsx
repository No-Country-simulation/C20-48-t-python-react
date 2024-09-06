import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AutoCompleteSelection from "./AutoCompleteSelection";
import Container from "@mui/material/Container";
import FilterIcon from "./UI/FilterIcon";

export default function SearchBar() {


  // Arrays de pruebas para el AutoCompleteSelection
  const dificuly = ["Facil", "Normal", "Dificil"];

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

  const ingredients = ["Arroz", "Pollo", "Carne", "Cerdo", "Pescado", "tomate", "pepino", "ajo", "cebolla", "oreganos"];
  
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
        <AutoCompleteSelection field="Categoria" options={categories} />
        <AutoCompleteSelection field="Ingrediente"  options={ingredients}/>
        <AutoCompleteSelection field="Dificultad" options={dificuly} />
      </Container>
    </Container>
  );
}
