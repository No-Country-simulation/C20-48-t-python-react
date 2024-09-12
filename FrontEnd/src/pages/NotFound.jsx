import { Link } from "react-router-dom";
import { Container, Typography, Button } from "@mui/material";

const NotFound = () => {
  return (
    <Container
      sx={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "background.paper",
        padding: 4,
        borderRadius: 4,
      }}
    >
      <Typography variant="h2" component="h1">
        404 - Página no encontrada
      </Typography>
      <Typography variant="body1" component="p" style={{ margin: "20px 0" }}>
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/">
        Volver al Inicio
      </Button>
    </Container>
  );
};

export default NotFound;
