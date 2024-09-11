import Contaienr from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <Contaienr maxWidth={"xl"} sx={{ marginTop: 4 }}>
      <Paper elevation={0} sx={{ padding: 4 }}>
        <Typography variant="h4" sx={{ marginBlock: 2 }}>
          About RecetApp
        </Typography>
        <Typography variant="body1" sx={{ marginBlock: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
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
