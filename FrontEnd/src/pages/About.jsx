import Contaienr from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <Contaienr maxWidth={"xl"} sx={{ marginTop: 4 }}>
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
        <Typography variant="body1" sx={{ marginBlock: 2 }}>
          <ul>
            <li>UX/UI: Ivan </li>
            <li>QA: Priscila, Matias </li>
            <li>Backend: Matias , Juan Manuel</li>
            <li>Frontend: Isaias, Adolfo, Juan Manuel</li>
          </ul>
        </Typography>
      </Paper>
    </Contaienr>
  );
}
