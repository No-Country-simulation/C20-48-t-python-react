import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DoneIcon from "@mui/icons-material/Done";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useAppData } from "../../Context/AppDataContext";
import Skeleton from "@mui/material/Skeleton";

export default function CategoriesBar({
  selectedCategory,
  setSelectedCategory,
}) {
  function handleClick(category) {
    setSelectedCategory({ ...selectedCategory, categoriaNombres: category });
  }
  const { categorias, categoriasLoading, categoriasError } = useAppData();

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
      {categoriasLoading ? (
        <Container disableGutters maxWidth={"xl"}>
          <Skeleton
            variant="rectangular"
            height={30}
            width={"100%"}
            animation="wave"
            sx={{
              borderRadius: 1,
            }}
          />
        </Container>
      ) : (
        <Swiper
          spaceBetween={10}
          slidesPerView="auto"
          freeMode={true}
          loop={true}
          style={{
            borderRadius: "10px",
          }}
        >
          {categorias?.map(({ id, nombre: category }, i) => (
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
                  selectedCategory.categoriaNombres === category
                    ? "filled"
                    : "outlined"
                }
                onDelete={
                  selectedCategory.categoriaNombres === category
                    ? () =>
                        setSelectedCategory({
                          ...selectedCategory,
                          categoriaNombres: null,
                        })
                    : undefined
                }
                deleteIcon={
                  selectedCategory.categoriaNombres === category ? (
                    <DoneIcon />
                  ) : undefined
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
}
