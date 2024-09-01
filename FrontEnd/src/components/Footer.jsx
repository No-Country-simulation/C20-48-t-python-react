import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <Container
      maxWidth={"false"}
      sx={{
        margin: 0,
        display: "flex",
        justifyContent: "center",
        backgroundColor: "background.paper",
        padding: 2,
      }}
    >
      <p>© 2022 RecetApp</p>
    </Container>
  );
}
