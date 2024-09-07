/* eslint-disable react/prop-types */
import { Container, Stack, TextField, Typography } from "@mui/material";

export default function AddImage({ note, handleImageChange }) {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h5" gutterBottom>
          Imagen
        </Typography>

        <TextField
          fullWidth
          multiline
          label="URL de la imagen"
          value={note}
          onChange={(event) => handleImageChange(event)}
          variant="outlined"
        />
      </Stack>
    </Container>
  );
}
