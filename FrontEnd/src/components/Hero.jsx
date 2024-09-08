import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

export default function Hero() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: {
          xs: "none",
          md: "inherit",
        },
        borderRadius: 4,
        marginBlock: 4,
        paddingBlock: 2,
        backgroundImage: `url("https://www.semana.com/resizer/v2/CBUJV763ORE2VENVF5HWJYWPQA.jpg?auth=282369669486f101ef91c99b4fb3cebcca0cc5a01d54a1baec7230089b2e7945&smart=true&quality=75&width=1280&height=720")`,
        backgroundSize: "cover",
        color: "white",
        boxShadow: 24,
      }}
    >
      <Card
        sx={{
          padding: 2,
          backgroundColor: "#4d2629B8",
          color: "white",
        }}
      >
        <h1>Receta destacada</h1>
        <h2>Lasagna</h2>
        <h5>por: Carlos</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed non risus.
        </p>
      </Card>
    </Container>
  );
}
