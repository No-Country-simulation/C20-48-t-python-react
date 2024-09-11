import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import UserRating from "./UI/UserRaiting";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ receta }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detalle-receta/${receta.id}`, { state: receta });
  };
  return (
    <Card
      sx={{
        minHeight: "100%",
        maxWidth: 345,
        borderRadius: 4,
        border: `1px solid `,
        borderColor: "primary.main",
        paddingBottom: 1,
        transition: "all 0.2s ease-in-out",
        ":hover": {
          boxShadow: "4px 4px 0px 4px  #1E1E1E",
          scale: 1.02,
        },
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          minWidth: 284,
          objectFit: "cover",
        }}
        image={receta.imagen}
        title="Food"
      />
      <CardContent sx={{ padding: 2 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "text.primary",
            fontSize: "min-content",
            lineHeight: "1.5", // Ajusta según el estilo de tu texto
            minHeight: "3em", // 1.5 (lineHeight) * 2 (número de líneas) = 3em
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "18ch",
            margin: 0,
          }}
          title={receta.nombre}
        >
          {receta.nombre}
        </Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
            por {receta.nombre_usuario}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Typography variant="subtitle2" color="success">
              Dif: {receta.dificultad}
            </Typography>

            <Typography variant="subtitle2" color="success">
              prep: {receta.tiempo_preparacion} min
            </Typography>
            <Typography variant="subtitle2" color="success">
              Cook: {receta.tiempo_coccion} min
            </Typography>
          </Stack>
          <Typography variant="subtitle2">
            Categoria principal:
            <Chip
              label={receta.categoria[0]}
              sx={{
                marginLeft: 1,
                cursor: "pointer",
                backgroundColor: "background.paper",
                borderColor: "primary.main",
              }}
              clickable={false}
              size="small"
              variant={"outlined"}
            />
          </Typography>
        </Stack>
      </CardContent>

      <Stack
        direction="row"
        spacing={1}
        sx={{
          marginTop: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardActions sx={{ paddingTop: 0, paddingInline: 2, display: "flex" }}>
          <Button
            variant="contained"
            size="small"
            sx={{ color: "white" }}
            onClick={handleClick}
          >
            Ver más
          </Button>
        </CardActions>
        <UserRating scale={"0.7"} mode={"read"} />
      </Stack>
    </Card>
  );
}
