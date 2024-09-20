import { useState } from "react";
import AddIngredients from "../components/recipe-edit/AddIngredients";
import AddCategories from "../components/recipe-edit/AddCategories";
import AddSteps from "../components/recipe-edit/AddSteps";
import AddRecipeName from "../components/recipe-edit/AddRecipeName";
import AddNotes from "../components/recipe-edit/AddNotes";
import AddImage from "../components/recipe-edit/AddImage";
import AddTimingsAndDifficulty from "../components/recipe-edit/AddTimingsAndDifficulty";
import DeleteRecipeFAB from "../components/DeleteRecipeFAB";
import { Alert, Button, Container, Snackbar, Stack } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useLocation, useNavigate } from "react-router-dom";

function RecipeSteps() {
  const navigate = useNavigate();
  const location = useLocation();
  const receta = location.state || {};
  const [error, setErrors] = useState(null);
  const [exito, setExito] = useState(null);
  const [image, setImage] = useState(receta?.imagenUrl || "");
  const [timings, setTimings] = useState({
    duracion: parseInt(receta?.duracion?.split(" ")[0]) || "",
    dificultad: receta?.dificultad || "",
  });
  const [steps, setSteps] = useState(receta?.pasos || []);
  const [name, setName] = useState(receta?.titulo || "");
  const [note, setNote] = useState(receta?.tips || "");
  const [categories, setCategories] = useState(receta?.recetaCategorias || []);
  const [ingredients, setIngredients] = useState(receta?.ingredientes || []);
  console.log();
  const handleDeleteRecipe = async () => {
    try {
      const response = await fetch(
        `https://recetapp-ggh9.onrender.com/recetas/${receta.id}/eliminar`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Error al eliminar la receta");
      }
      console.log("Receta eliminada");
    } catch (error) {
      console.log(error);
    }

    navigate("/mis-recetas");
  };

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
      newSteps[index].descripcion = event.target.value;
      setSteps(newSteps);
      console.log(newSteps);
    },
    handleAddStep: () => {
      setSteps([...steps, { descripcion: "", orden: steps.length }]);
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Error handling
    if (!name || !categories || !ingredients || !steps) {
      setErrors("true");
      return;
    }
    const url = receta.id
      ? `https://recetapp-ggh9.onrender.com/recetas/${receta.id}`
      : "https://recetapp-ggh9.onrender.com/recetas";
    const method = receta.id ? "PUT" : "POST";
    // Enviar la información a la base de datos
    const nuevaReceta = {
      titulo: name,
      duracion: timings.duracion,
      dificultad: timings.dificultad,
      imagenUrl: image,
      categoriaNombres: categories.map((category) => category.id),
      tips: note,
      ingredientes: ingredients,
      pasos: steps.map((step, index) => {
        return { descripcion: step.descripcion, orden: index };
      }),
    };
    try {
      const response = await fetch(url, {
        method: method,
        body: JSON.stringify(nuevaReceta),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Error al enviar la receta");
      }
      setExito(true);
      setTimeout(() => {
        navigate("/mis-recetas");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
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
      {exito && (
        <Snackbar
          open={exito}
          autoHideDuration={4000}
          onClose={() => setExito(null)}
        >
          <Alert severity="success">Receta enviada con éxito</Alert>
        </Snackbar>
      )}
      {receta.id && <DeleteRecipeFAB onDelete={handleDeleteRecipe} />}
    </>
  );
}

export default RecipeSteps;
