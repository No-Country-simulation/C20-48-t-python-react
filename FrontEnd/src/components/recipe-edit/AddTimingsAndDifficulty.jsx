/* eslint-disable react/prop-types */
import {
  Container,
  TextField,
  Button,
  Stack,
  Typography,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function AddTimingsAndDifficulty({
  timings,
  handleTimingsChange,
}) {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Tiempos y Dificultad (min)
      </Typography>
      <Stack spacing={2}>
        <Stack
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr 1fr",
            },
          }}
          useFlexGap
          alignItems="center"
          spacing={2}
        >
          <FormControl variant="outlined">
            <InputLabel>Dificultad</InputLabel>
            <Select
              value={timings.difficulty}
              onChange={(event) =>
                handleTimingsChange("difficulty", event.target.value)
              }
              label="Dificultad"
            >
              <MenuItem value={"facil"}>Fácil</MenuItem>
              <MenuItem value={"medio"}>Medio</MenuItem>
              <MenuItem value={"dificil"}>Difícil</MenuItem>
              <MenuItem value={"experto"}>Experto</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Preparar"
            type="number"
            slotProps={{
              htmlInput: {
                min: 0,
                step: "any",
              },
            }}
            value={timings.prep}
            onChange={(event) =>
              handleTimingsChange("prep", event.target.value)
            }
            variant="outlined"
          />
          <TextField
            label="Cocinar"
            type="number"
            slotProps={{
              htmlInput: {
                min: 0,
                step: "any",
              },
            }}
            value={timings.cook}
            onChange={(event) =>
              handleTimingsChange("cook", event.target.value)
            }
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Container>
  );
}
