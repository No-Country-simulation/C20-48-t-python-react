import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Card from "./Card";
import Typography from "@mui/material/Typography";
export default function DisplayCategories({ category }) {
  return (
    <Container sx={{ marginTop: 4 }} maxWidth={"xl"} disableGutters>
      <Typography
        variant="h5"
        sx={{
          padding: 2,
          paddingLeft: 4,
          borderRadius: 4,
          backgroundColor: "background.paper",
          display: "flex",
          alignItems: "center",
        }}
      >
        Recetas de
        <Typography variant="h5" sx={{ ml: 1, color: "primary.main" }}>
          "{category}"
        </Typography>
      </Typography>
      <Paper
        elevation={0}
        sx={{
          padding: {
            xs: 1,
            sm: 1,
            md: 4,
            lg: 4,
            xl: 4,
          },
          borderRadius: 4,
          marginBlock: 4,
        }}
      >
        <Container
          disableGutters
          maxWidth={"xl"}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            justifyItems: "center",
            gap: 4,
            margin: 0,
            padding: 0,
          }}
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </Paper>
    </Container>
  );
}
