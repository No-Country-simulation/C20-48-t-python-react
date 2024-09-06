import { Swiper, SwiperSlide } from "swiper/react";
import Container from "@mui/material/Container";
import Card from "../Card";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        borderRadius: 4,
        marginBlock: 4,
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
  );
}
