import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
export default function CardSkeletons() {
  return (
    <Grid
      container
      spacing={5}
      wrap="nowrap" // Evitar que se rompa a una nueva línea
      justifyContent="flex-start"
      sx={{
        overflowX: "hidden", // Ocultar contenido que no cabe
      }}
    >
      {Array.from(new Array(5)).map((_, index) => (
        <Grid
          item
          key={index}
          sx={{
            minWidth: { xs: "330px", sm: "50%", md: "25%" }, // Ancho mínimo en pantallas pequeñas y porcentajes en pantallas más grandes
            flexGrow: 1,
          }}
        >
          <Skeleton variant="rectangular" height={330} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
