import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Helmet } from "react-helmet-async";
import { Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import UserTable from "../components/UserTable";

import adolfoPhoto from "../assets/team-photos/Adolfo.jpg";
import isaiasPhoto from "../assets/team-photos/isaias.jpg";
import ivanPhoto from "../assets/team-photos/ivan.jpg";
import juanPhoto from "../assets/team-photos/juan.png";
import matiPhoto from "../assets/team-photos/mati.jpg";
import priPhoto from "../assets/team-photos/pri.jpg";


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
      linkedin: "www.linkedin.com/in/dafne-priscila-ewens"
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
  ]

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
        <Typography variant="h4" sx={{ marginBlock: 2 }}>
          Sobre RecetApp
        </Typography>
        <Typography variant="body1" sx={{ marginBlock: 2 }}>
          Es un aplicación web responsive, donde cualquier usuario puede
          consultar recetas y siendo un usuario registrado, además podrá
          compartir sus recetas, pudiendo recibir comentarios y calificaciones
          de otros usuarios. Objetivos y funciones del Sitio Web: Permitir a
          los usuarios, la búsqueda de recetas a partir de los ingredientes,
          descripción o categoría de la misma. Los usuarios podrán crear y
          compartir sus propias recetas, una vez que estén registrados en el
          sitio web. Las recetas podrán ser visualizadas por otros usuarios, y
          para quienes estén registrados, tendrán la opción de comentar y
          realizar las puntuaciones de las mismas. En el perfil de usuario podrá
          crear una lista de sus recetas favoritas, además de visualizar las
          recetas que ha publicado, pudiendo editar las mismas. Un usuario
          registrado podrá seguir a otros. Además, contarán con la opción de
          dejar de seguirlos.
        </Typography>
        <Typography variant="h5" sx={{ marginBlock: 2 }}>
          Integrantes
        </Typography>
      {/*  */}
        <TableContainer component={Paper} >
      <Table>
        <TableHead sx={{ backgroundColor: "background.default" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Foto</TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Nombre</TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Rol</TableCell>
            <TableCell sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>Redes Sociales</TableCell>
          </TableRow>
        </TableHead>

        {
          integrantes.map((integrante) => (
            <UserTable
              key={integrante.name}
              photo={integrante.photo}
              name={integrante.name}
              role={integrante.role}
              github={integrante.github}
              linkedin={integrante.linkedin}
            />
          ))
        }

</Table>
</TableContainer>
      </Paper>
    </Container>
  );
}
