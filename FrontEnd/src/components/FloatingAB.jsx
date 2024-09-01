import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export default function FloatingActionButtons() {
  return (
    <Box
      sx={{
        m: 1,
        position: "fixed",
        bottom: 16,
        right: 16,
        display: "flex",
        gap: 2,
        zIndex: 1,
      }}
    >
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
}
