import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";

export default function CategoriesBar({
  selectedCategory,
  setSelectedCategory,
}) {
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

  function handleClick(category) {
    setSelectedCategory({ ...selectedCategory, category: category });
  }

  return (
    <Box
      maxWidth={"xl"}
      sx={{
        paddingBlock: 2,
        paddingBottom: 4,
        cursor: "grab",
        borderRadius: "100px",
      }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        loop={true}
        style={{
          borderRadius: "10px",
        }}
      >
        {categories.map((category, i) => (
          <SwiperSlide
            key={category + i}
            style={{
              width: "min-content", // El ancho se ajusta automáticamente según el contenido
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Chip
              label={category}
              sx={{
                cursor: "pointer",
                minWidth: "80px",
                backgroundColor: "background.paper",
                borderColor: "primary.main",
                boxShadow: "2px, 2px, 2px, 0px rgba(0, 0, 0, 0.1)",
              }} // Ajuste mínimo para evitar chips muy pequeños
              onClick={() => handleClick(category)}
              variant={
                selectedCategory.category === category ? "filled" : "outlined"
              }
              onDelete={
                selectedCategory.category === category
                  ? () =>
                      setSelectedCategory({
                        ...selectedCategory,
                        category: null,
                      })
                  : undefined
              }
              deleteIcon={
                selectedCategory.category === category ? (
                  <DoneIcon />
                ) : undefined
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
