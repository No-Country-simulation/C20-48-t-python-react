import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

export default function ApiDocs() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        mt: 4,
        backgroundColor: "background.paper",
        borderRadius: "10px",
        padding: 4,
      }}
    >
      <Stack>
        <Typography variant="h3" gutterBottom>
          RECETAPP
        </Typography>

        <Typography variant="body1" gutterBottom>
          El proyecto es una API para la gestión de recetas, de libre acceso
          para todo el mundo y permitiendo a los usuarios autenticados mediante
          JWT crear, actualizar, eliminar y consultar recetas. Cada receta puede
          ser valorada, recibir likes y estar asociada con diferentes categorías
          e ingredientes. Los usuarios pueden ver sus recetas, buscar recetas
          por categorías, nombre y hasta ingredientes.
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <Typography variant="h4" gutterBottom>
          Documentación de la API
        </Typography>
        <Stack>
          <Typography id="tecnologias" variant="h5" gutterBottom>
            1. Tecnologías Utilizadas
          </Typography>
          <ul>
            <Typography variant="h5">FrontEnd:</Typography>
            <Typography variant="h6">React + Vite</Typography>
            <Typography variant="h6">Material UI</Typography>
            <br/>
            <Typography variant="h5">Backend:</Typography>
            <Typography variant="h6">Base de Datos: MySQL</Typography>
            <Typography variant="h6">
              {" "}
              Autenticación: JWT (JSON Web Token)
            </Typography>
            <Typography variant="h6">
              Dependencias: Spring Data JPA, Spring Security, Spring Web, Lombok
            </Typography>
          </ul>
        </Stack>
        <Stack>
          <Typography id="tecnologias" variant="h5" gutterBottom>
            2. Arquitectura del proyecto
          </Typography>
          <Typography variant="h6">
            El proyecto sigue una arquitectura en capas con los siguientes
            componentes:
          </Typography>
          <ul>
            <Typography variant="h6">
              Controladores: Gestionan las peticiones HTTP y devuelven
              respuestas a los clientes.
            </Typography>
            <Typography variant="h6">
              Servicios: Implementan la lógica de negocio.
            </Typography>
            <Typography variant="h6">
              Repositorios: Gestionan las operaciones con la base de datos.
            </Typography>
            <Typography variant="h6">
              DTOs: Estructuran los datos intercambiados entre el cliente y el
              servidor.
            </Typography>
          </ul>
        </Stack>
        <Stack>
          <Typography id="tecnologias" variant="h5" gutterBottom>
            3. Endpoints y API
          </Typography>
          <Typography variant="h6">
            El proyecto sigue una arquitectura en capas con los siguientes
            componentes:
          </Typography>
          <ul>
            <Typography variant="h6">
              Controladores: Gestionan las peticiones HTTP y devuelven
              respuestas a los clientes.
            </Typography>
            <Typography variant="h6">
              Servicios: Implementan la lógica de negocio.
            </Typography>
            <Typography variant="h6">
              Repositorios: Gestionan las operaciones con la base de datos.
            </Typography>
            <Typography variant="h6">
              DTOs: Estructuran los datos intercambiados entre el cliente y el
              servidor.
            </Typography>
          </ul>
        </Stack>
      </Stack>
    </Container>
  );
}
