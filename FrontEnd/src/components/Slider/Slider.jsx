import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
import Card from "../Card";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Suspense } from "react";

export default function Slider({ category, recetas }) {
  return (
    <Container sx={{ marginTop: 4 }} maxWidth={"xl"} disableGutters>
      <Typography
        variant="h5"
        sx={{
          padding: 2,
          paddingLeft: 4,
          borderRadius: 4,
          backgroundColor: "background.paper",
          boxShadow: 2,
        }}
      >
        {category}
      </Typography>
      <Container
        maxWidth={"xl"}
        sx={{
          borderRadius: 4,
          marginBlock: 2,
          padding: 2,
          color: "white",
          backgroundColor: "background.paper",
          boxShadow: 2,
        }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Swiper
            style={{ padding: "10px" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={30}
            grabCursor={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {recetas.map((receta) => (
              <SwiperSlide key={receta.id}>
                <Card receta={receta} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Suspense>
      </Container>
    </Container>
  );
}
