import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Card from "./Card";

export default function DisplayCategories({ category }) {
  return (
    <>
      <h1>{category}</h1>
      <Paper
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
          <Card color="red" />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Container>
      </Paper>
    </>
  );
}
