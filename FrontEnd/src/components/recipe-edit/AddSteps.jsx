/* eslint-disable react/prop-types */
import {
  Button,
  Container,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function AddSteps({
  steps,
  handleSteps: {
    handleAddStep,
    handleMoveStepDown,
    handleMoveStepUp,
    handleRemoveStep,
    handleStepChange,
  },
}) {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Pasos
      </Typography>
      <Stack spacing={2}>
        {steps.map(({ descripcion, id, orden }, index) => (
          <Stack key={index} direction="column" alignItems="end" spacing={1}>
            <TextField
              fullWidth
              multiline
              label={`Paso ${index + 1}`}
              value={descripcion}
              onChange={(event) => handleStepChange(index, event)}
              variant="outlined"
            />
            <Stack
              direction="row"
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <IconButton
                color="primary"
                disabled={index === 0}
                onClick={() => handleMoveStepUp(index)}
              >
                <ArrowUpwardIcon />
              </IconButton>
              <IconButton
                color="primary"
                disabled={index === steps.length - 1}
                onClick={() => handleMoveStepDown(index)}
              >
                <ArrowDownwardIcon />
              </IconButton>
              {steps.length > 1 && (
                <IconButton
                  color="error"
                  onClick={() => handleRemoveStep(index)}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Stack>
          </Stack>
        ))}
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddStep}
        >
          Agregar Paso
        </Button>
      </Stack>
    </Container>
  );
}
