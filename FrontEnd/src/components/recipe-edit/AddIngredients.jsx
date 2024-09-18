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
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AddIngredients({ ingredients, onIngredientsChange }) {
  const handleIngredientChange = (index, field, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field] = value;
    onIngredientsChange(newIngredients);
  };

  const handleAddIngredient = () => {
    onIngredientsChange([
      ...ingredients,
      { cantidad: "", unidadMedida: "", nombre: "" },
    ]);
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    onIngredientsChange(newIngredients);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Ingredientes
      </Typography>
      <Stack spacing={2}>
        {ingredients.map((ingredient, index) => (
          <Stack
            key={index}
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 3fr 2fr 40px",
            }}
          >
            <TextField
              fullWidth
              label="Ingrediente"
              value={ingredient.nombre}
              type="text"
              onChange={(event) =>
                handleIngredientChange(index, "nombre", event.target.value)
              }
              variant="outlined"
            />
            <FormControl variant="outlined">
              <InputLabel>Unidad</InputLabel>
              <Select
                value={ingredient.unidadMedida}
                onChange={(event) =>
                  handleIngredientChange(
                    index,
                    "unidadMedida",
                    event.target.value,
                  )
                }
                label="Unidad"
              >
                <MenuItem value={"taza"}>Taza</MenuItem>
                <MenuItem value={"cucharada"}>Cucharada</MenuItem>
                <MenuItem value={"cucharadita"}>Cucharadita</MenuItem>
                <MenuItem value={"gramos"}>Gramos</MenuItem>
                <MenuItem value={"kilogramos"}>Kilogramos</MenuItem>
                <MenuItem value={"ml"}>Mililitros (ml)</MenuItem>
                <MenuItem value={"litro"}>Litro</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="N°"
              type="number"
              slotProps={{
                htmlInput: {
                  min: 0,
                  step: "any",
                },
              }}
              value={ingredient.cantidad}
              onChange={(event) =>
                handleIngredientChange(index, "cantidad", event.target.value)
              }
              variant="outlined"
            />
            {ingredients.length > 1 && (
              <IconButton
                color="error"
                onClick={() => handleRemoveIngredient(index)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Stack>
        ))}
      </Stack>
      <Button
        fullWidth
        sx={{ mt: 2 }}
        variant="contained"
        startIcon={<AddIcon />}
        onClick={handleAddIngredient}
      >
        Agregar Ingrediente
      </Button>
    </Container>
  );
}
