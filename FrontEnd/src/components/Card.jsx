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
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

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
        opacity: 1,
        animation: "fadeIn 0.5s ease-in-out forwards",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <CardMedia
        sx={{
          height: 140,
          minWidth: 284,
          objectFit: "cover",
          boxShadow: "0px 1px 6px 0px #1E1E1E",
        }}
        image={receta?.imagenUrl || "https://via.placeholder.com/150"}
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
          title={receta?.titulo}
        >
          {receta?.titulo}
        </Typography>
        <Divider sx={{ marginTop: 1, marginBottom: 2, marginInline: -1 }} />
        <Stack
          spacing={1}
          sx={{
            backgroundColor: "rgba(100, 100, 100, 0.10)",
            padding: 1,
            margin: -1,
            borderRadius: 1,
            border: `1px solid  `,
            borderColor: "rgba(100, 100, 100, 0.40)",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              color: "primary.main",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            por {receta?.usuarioEmail?.split("@")[0]}
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ alignItems: "start", justifyContent: "start" }}
          >
            <Typography variant="subtitle2" color="success">
              Dif:
            </Typography>
            {receta.dificultad === "facil" ? (
              <FiberManualRecordIcon color="success" fontSize="small" />
            ) : receta.dificultad === "medio" ? (
              <FiberManualRecordIcon color="warning" fontSize="small" />
            ) : (
              <FiberManualRecordIcon color="error" fontSize="small" />
            )}

            <Typography variant="subtitle2" color="success">
              Prep: {receta?.duracion?.split(" ")[0]} &prime;
            </Typography>
            <Typography variant="subtitle2" color="success">
              Cook: {receta?.duracion?.split(" ")[0]} &prime;
            </Typography>
          </Stack>
          <Typography variant="subtitle2">
            Categoria:
            <Chip
              label={
                receta?.recetaCategorias
                  ? receta.recetaCategorias[0]?.nombreCategoria
                  : "No categoria"
              }
              sx={{
                marginLeft: 1,
                cursor: "default",
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
          // marginTop: 1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CardActions
          sx={{ paddingBlock: 1, paddingInline: 1, display: "flex" }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ color: "white" }}
            onClick={handleClick}
          >
            Ver más
          </Button>
        </CardActions>
        <UserRating
          defaultRating={receta.promedioPuntuacion}
          scale={"0.7"}
          mode={"read"}
        />
      </Stack>
    </Card>
  );
}
