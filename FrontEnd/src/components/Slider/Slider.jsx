import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
import Card from "../Card";
import Typography from "@mui/material/Typography";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination, Autoplay } from "swiper/modules";

export default function App({ category }) {
  return (
    <Container sx={{ marginTop: 4 }} maxWidth={"xl"} disableGutters>
      <Typography
        variant="h5"
        sx={{
          padding: 2,
          paddingLeft: 4,
          borderRadius: 4,
          backgroundColor: "background.paper",
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
        }}
      >
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
          centeredSlides={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </Container>
    </Container>
  );
}
