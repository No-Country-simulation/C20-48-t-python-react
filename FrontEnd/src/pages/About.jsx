import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import { Helmet } from "react-helmet-async";
import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import UserTable from "../components/UserTable";

import adolfoPhoto from "../assets/team-photos/Adolfo.jpg";
import isaiasPhoto from "../assets/team-photos/isaias.jpg";
import ivanPhoto from "../assets/team-photos/ivan.jpg";
import juanPhoto from "../assets/team-photos/juan.png";
import matiPhoto from "../assets/team-photos/mati.jpg";
import priPhoto from "../assets/team-photos/pri.jpg";
import { Link } from "react-router-dom";

export default function About() {
  const integrantes = [
    {
      name: "Juan Manuel Sanjurjo",
      photo: juanPhoto,
      role: "Backend Developer / Frontend Developer",
      github: "https://github.com/JuanManuelSanjurjo",
      linkedin: "https://www.linkedin.com/in/juanmanuelsanjurjo/",
    },
    {
      name: "Isaias Romero",
      photo: isaiasPhoto,
      role: "Frontend Developer",
      github: "https://github.com/Isa696",
      linkedin: "https://www.linkedin.com/in/isaias-romero696/",
    },
    {
      name: "Matias Badano",
      photo: matiPhoto,
      role: "Backend Developer / QA Tester",
      github: "https://github.com/MatiasJB95",
      linkedin: "https://www.linkedin.com/in/matiasjb95/",
    },
    {
      name: "Priscila Ewens",
      photo: priPhoto,
      role: "QA Tester",
      github: "https://github.com/dafnepriscilaewens",
      linkedin: "www.linkedin.com/in/dafne-priscila-ewens",
    },
    {
      name: "Adolfo Sánchez",
      photo: adolfoPhoto,
      role: "Frontend Developer",
      github: "https://github.com/Adolfsan99",
      linkedin: "https://www.linkedin.com/in/adolfosanchezlopez/",
    },
    {
      name: "Iván Capaquira",
      photo: ivanPhoto,
      role: "UX/UI Designer",
      github: "https://github.com/quiraoficial",
      linkedin: "https://www.linkedin.com/in/hectorcapaquira/",
    },
  ];

  return (
    <Container maxWidth={"xl"} sx={{ marginTop: 4 }}>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content="Sobre RecetApp, una MVP desarrollada durante nuestra simulación laboral en No Country"
        />
      </Helmet>
      <Paper elevation={0} sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ marginBlock: 2, textAlign: "center", textDecoration: "underline" }}>
          Sobre RecetApp<RamenDiningIcon fontSize="large" />
        </Typography>
        <Typography variant="body1" sx={{ marginBlock: 2 , textAlign: "center"}}>
          Bienvenidos a RecetApp, tu aplicación web donde puedes
          descubrir y compartir recetas deliciosas.😋 <br />🔍 Búsqueda de Recetas:<br />
          Encuentra recetas por ingredientes, descripción o categoría.<br /> 👩‍🍳 Crea y
          Comparte:<br /> Los usuarios registrados pueden crear y compartir sus
          propias recetas.<br /> 💬 Comentarios y Calificaciones:<br /> Recibe comentarios y
          calificaciones de otros usuarios.<br /> ⭐ Favoritos:<br /> Crea una lista de tus
          recetas favoritas y edita tus publicaciones en tu perfil.<br /> 👥 Sigue a
          Otros:<br /> Sigue a tus cocineros favoritos y deja de seguirlos cuando
          quieras. <br /><br />Este proyecto fue realizado durante una simulación laboral de
          No Country. <br />¡Únete a nuestra comunidad y comparte tu pasión por la
          cocina! 🍽️❤️
        </Typography>
        <Typography variant="h5" sx={{ marginBlock: 2, textAlign: "center" }}>
          RecetApp Team
        </Typography>
        {/*  */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "background.default" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Foto
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Nombre
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Rol
                </TableCell>
                <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                  Redes Sociales
                </TableCell>
              </TableRow>
            </TableHead>

            {integrantes.map((integrante) => (
              <UserTable
                key={integrante.name}
                photo={integrante.photo}
                name={integrante.name}
                role={integrante.role}
                github={integrante.github}
                linkedin={integrante.linkedin}
              />
            ))}
          </Table>
        </TableContainer>
      </Paper>

      <Button
        variant="contained"
        sx={{ margin: "auto", display: "block", marginY: 2 }}
        ><Link to="/api-docs" style={{ textDecoration: "none", color: "white" }} variant="contained">
          Ver Docs
        </Link>
          </Button>
    </Container>
  );
}
