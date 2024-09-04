import { recetas } from "../assets/recetas";
import {
  Container,
  Paper,
  Typography,
  Stack,
  IconButton,
  Divider,
  Chip,
  Box,
} from "@mui/material";
import UserRating from "../components/UI/UserRaiting";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IngredientList from "../components/UI/IngredientsList";
import { useState } from "react";

const receta = recetas[0];

function RecipeDetail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };


  return (
    <Container disableGutters maxWidth={"lg"} sx={{ marginBlock: 4 }}>
      <Paper sx={{ padding: 2 }}>
        <Stack sx={{ padding: { xs: 0, sm: 2 }, gap: 2 }} direction="column">
          <Typography variant="h3">{receta.nombre}</Typography>
          <Typography color="success" variant="body1">
            Por: {receta.nombre_usuario}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <img
            src="https://www.semana.com/resizer/v2/CBUJV763ORE2VENVF5HWJYWPQA.jpg?auth=282369669486f101ef91c99b4fb3cebcca0cc5a01d54a1baec7230089b2e7945&smart=true&quality=75&width=1280&height=720"
            style={{
              width: "90%",
              height: "auto",
              borderRadius: 10,
              margin: "auto",
            }}
          />
          <Divider sx={{ marginBlock: 2 }} />
          <Stack
            direction="row"
            sx={{
              flexWrap: "wrap",
              gap: 2,
    
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack
              sx={{
                maxWidth: {
                  xs: "100%",
                  lg: "70%",
                },
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  gap: 10,
                },
              }}
            >
              <Typography variant="h5">Categorias:</Typography>
              <Container
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 1,
                  padding: 0,
                  margin: 0,
                }}
              >
                {receta.categoria.map((categoria) => (
                  <Chip
                    key={categoria}
                    color="primary"
                    label={categoria}
                    size="medium"
                  />
                ))}
              </Container>
            </Stack>
            <Stack
              sx={{
                gap: 2,
                paddingInline: 2,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <UserRating />
              <Typography variant="h5">{receta.rating}</Typography>
              <IconButton aria-label="fingerprint" color="secondary">
                <FavoriteIcon
                  color={isFavorite ? "primary" : "default"}
                  onClick={handleToggleFavorite}
                  sx={{ transition: "all 0.2s ease-in-out" }}
                />
              </IconButton>
              <Typography variant="h5">{receta.favoritos}</Typography>
            </Stack>
          </Stack>
          <Divider sx={{ marginBlock: 2 }} />
          <Typography variant="h5">Ingredientes</Typography>
          <IngredientList ingredients={receta.ingredientes} />
          <Divider sx={{ marginBlock: 2 }} />
          <Container disableGutters>
            <Box direction="row" sx={{ gap: 2 }}>
              <Typography gutterBottom variant="h4">
                Preparacion :
              </Typography>
              <Typography variant="body1">
                Dificultad {receta.dificultad}
              </Typography>
            </Box>
            <Box
              sx={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                overflow: "hidden",
                lineHeight: 1.75,
                fontSize: "1.2rem",
              }}
            >
              {receta.descripcion}
            </Box>
          </Container>
          <Divider sx={{ marginBlock: 2 }} />
          <Container disableGutters>
            <Typography gutterBottom variant="h4">
              Notas
            </Typography>
            <Typography variant="body1">{receta.notas}</Typography>
          </Container>
        </Stack>
      </Paper>
    </Container>
  );
}

export default RecipeDetail;
