import { useState } from "react";
import AddIngredients from "../components/recipe-edit/AddIngredients";
import AddCategories from "../components/recipe-edit/AddCategories";
import AddSteps from "../components/recipe-edit/AddSteps";
import AddRecipeName from "../components/recipe-edit/AddRecipeName";
import AddNotes from "../components/recipe-edit/AddNotes";
import AddImage from "../components/recipe-edit/AddImage";
import AddTimingsAndDifficulty from "../components/recipe-edit/AddTimingsAndDifficulty";
import { Alert, Button, Container, Snackbar, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";

function RecipeSteps() {
  const [error, setErrors] = useState(null);
  const [image, setImage] = useState("");
  const [timings, setTimings] = useState({
    prep: "",
    cook: "",
    difficulty: "",
  });
  const [steps, setSteps] = useState([""]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([
    { quantity: "", unit: "", name: "" },
  ]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTimingsChange = (field, value) => {
    setTimings({ ...timings, [field]: value });
  };
  const handleSteps = {
    handleStepChange: (index, event) => {
      const newSteps = [...steps];
      newSteps[index] = event.target.value;
      setSteps(newSteps);
    },
    handleAddStep: () => {
      setSteps([...steps, ""]);
    },
    handleRemoveStep: (index) => {
      const newSteps = [...steps];
      newSteps.splice(index, 1);
      setSteps(newSteps);
    },
    handleMoveStepUp: (index) => {
      if (index === 0) return;
      const newSteps = [...steps];
      [newSteps[index - 1], newSteps[index]] = [
        newSteps[index],
        newSteps[index - 1],
      ];
      setSteps(newSteps);
    },
    handleMoveStepDown: (index) => {
      if (index === steps.length - 1) return;
      const newSteps = [...steps];
      [newSteps[index + 1], newSteps[index]] = [
        newSteps[index],
        newSteps[index + 1],
      ];
      setSteps(newSteps);
    },
  };

  const handleCategoriesChange = (event, value) => {
    setCategories(value);
  };

  const handleIngredientsChange = (newIngredients) => {
    setIngredients(newIngredients);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Enviar la información a la base de datos
    // Error handling
    if (!name || !categories || !ingredients || !steps || !note) {
      setErrors("true");
    }
    console.log(name, categories, ingredients, steps, note, timings, image);
  };

  return (
    <>
    <Helmet>
      <title>Editar o crear receta</title>
      <meta name="description" content="Editar o crear receta" />
    </Helmet>
      <Container
        maxWidth="sm"
        sx={{
          padding: 2,
          marginBlock: 2,
          backgroundColor: "background.paper",
          borderRadius: "10px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <AddRecipeName name={name} handleNameChange={handleNameChange} />
          <AddCategories
            categories={categories}
            handleCategoriesChange={handleCategoriesChange}
          />
          <AddTimingsAndDifficulty
            timings={timings}
            handleTimingsChange={handleTimingsChange}
          />
          <AddImage image={image} handleImageChange={handleImageChange} />
          <AddIngredients
            ingredients={ingredients}
            onIngredientsChange={handleIngredientsChange}
          />
          <AddSteps steps={steps} handleSteps={handleSteps} />
          <AddNotes note={note} handleNoteChange={handleNoteChange} />
          <Stack sx={{ marginBlock: 4, paddingInline: 10 }}>
            <Button type="submit" variant="contained" color="warning">
              Enviar
            </Button>
          </Stack>
        </form>
      </Container>
      {error && (
        <Snackbar
          open={error}
          autoHideDuration={4000}
          onClose={() => setErrors(null)}
        >
          <Alert severity="warning">
            Por favor, rellena todos los campos requeridos.
          </Alert>
        </Snackbar>
      )}
    </>
  );
}

export default RecipeSteps;
