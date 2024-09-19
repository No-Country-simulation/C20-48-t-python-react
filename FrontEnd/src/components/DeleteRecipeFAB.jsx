import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Tooltip, Box } from "@mui/material";

export default function DeleteRecipeFAB({ onDelete }) {
  const handleDelete = () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta receta?")) {
      onDelete(); // Ejecuta la función pasada como prop
    }
  };

  return (
    <Box
      sx={{
        height: 330,
        transform: "translateZ(0px)",
        flexGrow: 1,
        m: 1,
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        gap: 2,
        zIndex: 1,
      }}
    >
      <Tooltip title="Eliminar receta" aria-label="eliminar">
        <Fab
          color="error"
          aria-label="delete"
          onClick={handleDelete}
          sx={{ position: "absolute", bottom: 16, right: 16 }}
        >
          <DeleteForeverIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}
