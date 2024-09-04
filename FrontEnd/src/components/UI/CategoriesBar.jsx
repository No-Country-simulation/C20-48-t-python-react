import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import DoneIcon from '@mui/icons-material/Done';
import { useState } from "react";

export default function CategoriesBar() {
  const categories = [
    "Cocina",
    "Cafe",
    "Cervezas",
    "Comida",
    "Vinos",
    "Pastas",
    "Desayunos",
    "Ensaladas",
    "Hamburguesas",
    "Carnes",
    "Pescados",
    "Entradas",
    "Sopas",
    "Postres",
    "Bebidas",
    "Snacks",
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <Container
    disableGutters
    maxWidth={"xl"}
      sx={{
        display: "flex",
        flexWrap: "nowrap",
        gap: 1,
        margin: 1,
        overflowX: "hidden",
        justifyContent: "start",
        alignItems: "center",
        cursor: "grab",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {categories.map((category) => (
        <Chip
          label={category}
          key={Math.random()}
          sx={{ cursor: 'pointer' }}
          onClick={() => handleClick(category)}
          variant={selectedCategory === category ? "filled" : "outlined"}
          onDelete={selectedCategory === category ? () => setSelectedCategory(null) : undefined}
          deleteIcon={selectedCategory === category ? <DoneIcon /> : null}
        />
      ))}
    </Container>
  );
}
