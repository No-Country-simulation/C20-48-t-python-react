/* eslint-disable react/prop-types */
import { Autocomplete, Container, TextField, Typography } from "@mui/material";
import { useAppData } from "../../Context/AppDataContext";
import { useEffect } from "react";
const categoryOptions = [
  "Desayuno",
  "Almuerzo",
  "Cena",
  "Postre",
  "Vegetariano",
  "Vegano",
  "Sin Gluten",
];
export default function AddCategories({ categories, handleCategoriesChange }) {
  const { categorias, categoriasLoading, categoriasError } = useAppData();

  if (categoriasLoading) {
    return <p>Cargando...</p>;
  }
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Categorías
      </Typography>
      <Autocomplete
        multiple
        options={categorias}
        getOptionLabel={(option) => option?.nombreCategoria || option.nombre} //
        value={categories}
        onChange={handleCategoriesChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Categorías" />
        )}
      />
    </Container>
  );
}
