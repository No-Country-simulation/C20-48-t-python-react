/* eslint-disable react/prop-types */
import { Container, TextField, Typography } from "@mui/material";

export default function AddSteps({ name, handleNameChange }) {
  return (
    <Container maxWidth="sm" sx={{ marginBlock: 4 }}>
      <Typography variant="h3" gutterBottom>
        Crear Receta
      </Typography>
      <Typography variant="h4" gutterBottom>
        Nombre
      </Typography>
      <TextField
        fullWidth
        label="Nombre de la Receta"
        value={name}
        onChange={(event) => handleNameChange(event)}
        variant="outlined"
      />
    </Container>
  );
}
