/* eslint-disable react/prop-types */
import { Autocomplete, Container, TextField, Typography } from "@mui/material";

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
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Categorías
      </Typography>
      <Autocomplete
        multiple
        options={categoryOptions}
        value={categories}
        onChange={handleCategoriesChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Categorías" />
        )}
      />
    </Container>
  );
}
