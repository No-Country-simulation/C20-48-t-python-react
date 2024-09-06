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
    onIngredientsChange([...ingredients, { quantity: "", unit: "", name: "" }]);
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
          <Stack key={index} direction="row" alignItems="center" spacing={2}>
            <TextField
              fullWidth
              label="Ingrediente"
              value={ingredient.name}
              type="text"
              onChange={(event) =>
                handleIngredientChange(index, "name", event.target.value)
              }
              variant="outlined"
            />
            <FormControl
              variant="outlined"
              sx={{
                minWidth: {
                  xs: "20%",
                  sm: 120,
                },
              }}
            >
              <InputLabel>Unidad</InputLabel>
              <Select
                value={ingredient.unit}
                onChange={(event) =>
                  handleIngredientChange(index, "unit", event.target.value)
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
              value={ingredient.quantity}
              onChange={(event) =>
                handleIngredientChange(index, "quantity", event.target.value)
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
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddIngredient}
        >
          Agregar Ingrediente
        </Button>
      </Stack>
    </Container>
  );
}
