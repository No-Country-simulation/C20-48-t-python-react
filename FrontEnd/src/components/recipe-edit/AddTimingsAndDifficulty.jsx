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
  console.log(timings);
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
              value={timings?.dificultad}
              defaultValue={timings?.dificultad}
              onChange={(event) =>
                handleTimingsChange("dificultad", event.target.value)
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
            value={timings?.duracion}
            onChange={(event) =>
              handleTimingsChange("duracion", event.target.value)
            }
            variant="outlined"
          />
          <TextField
            label="Cocinar"
            type="number"
            placeholder={timings?.duracion}
            slotProps={{
              htmlInput: {
                min: 0,
                step: "any",
              },
            }}
            value={timings?.duracion}
            onChange={(event) =>
              handleTimingsChange("duracion", event.target.value)
            }
            variant="outlined"
          />
        </Stack>
      </Stack>
    </Container>
  );
}
