import Container from "@mui/material/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Obtener el año actual

  return (
    <Container
      maxWidth={false}
      sx={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "background.paper",
        padding: 2,
      }}
    >
      <p>© {currentYear} RecetApp</p> {/* Año dinámico */}
    </Container>
  );
}