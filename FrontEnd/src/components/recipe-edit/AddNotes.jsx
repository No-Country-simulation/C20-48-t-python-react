/* eslint-disable react/prop-types */
import { Container, Stack, TextField, Typography } from "@mui/material";

export default function AddNotes({ note, handleNoteChange }) {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Stack spacing={2}>
        <Typography variant="h4" gutterBottom>
          Notas
        </Typography>

        <TextField
          fullWidth
          multiline
          label="Notas"
          value={note}
          onChange={(event) => handleNoteChange(event)}
          variant="outlined"
        />
      </Stack>
    </Container>
  );
}
