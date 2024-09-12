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
import FloatingAB from "../components/FloatingAB";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function RecipeDetail() {
  const { userInfo, isLogin } = useContext(UserContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const location = useLocation();
  const receta = location.state || {};

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      receta.favoritos++;
    } else {
      receta.favoritos--;
    }
  };

  const handleDoneStep = (e, i) => {
    const el = e.currentTarget;
    el.style.textDecoration =
      el.style.textDecoration === "line-through" ? "none" : "line-through";
  };

  return (
    <Container disableGutters maxWidth={"lg"}>
      <Paper sx={{ padding: "50px 15px 150px 15px" }}>
        <Stack sx={{ padding: { xs: 0, sm: 2 }, gap: 2 }} direction="column">
          <Typography variant="h3">{receta.nombre}</Typography>
          <Typography color="success" variant="body1">
            Por: {receta.nombre_usuario}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <img
            src={receta.imagen}
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
                {receta.categoria.map((categoria, i) => (
                  <Chip
                    key={categoria + i}
                    label={categoria}
                    variant="outlined"
                    sx={{
                      minWidth: "80px",
                      backgroundColor: "background.paper",
                      borderColor: "primary.main",
                      boxShadow: "2px, 2px, 2px, 0px rgba(0, 0, 0, 0.1)",
                    }}
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
              <IconButton
                aria-label="fingerprint"
                color="secondary"
                onClick={handleToggleFavorite}
              >
                <FavoriteIcon
                  color={isFavorite ? "primary" : "default"}
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
            <Stack
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: 2,
                padding: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography gutterBottom variant="h4" m={0}>
                Preparación :
              </Typography>
              <Typography variant="h6" color="success">
                Dificultad: {receta.dificultad}
              </Typography>
              <Typography variant="h6" color="success">
                Preparación: {receta.tiempo_preparacion} min
              </Typography>
              <Typography variant="h6" color="success">
                Cocción: {receta.tiempo_coccion} min
              </Typography>
            </Stack>
            <Box
              sx={{
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                overflow: "hidden",
                lineHeight: 1.75,
                fontSize: "1.2rem",
              }}
            >
              {receta.descripcion.map((paso, i) => (
                <Paper
                  key={paso + i}
                  elevation={2}
                  sx={{
                    marginBlock: 2,
                    display: "flex",
                    gap: 2,
                    alignItems: "center",
                    borderRadius: 2,
                    padding: 2,
                    cursor: "pointer",
                    backgroundColor: "background.paper",
                    transition: "all 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                    },
                  }}
                  onClick={(e) => handleDoneStep(e, i)}
                >
                  <Typography variant="h6" color="success">
                    {`${i + 1}. `}
                  </Typography>
                  <Typography>{paso}</Typography>
                </Paper>
              ))}
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

      {isLogin && userInfo.id === receta.id_usuario && <FloatingAB />}
    </Container>
  );
}

export default RecipeDetail;
