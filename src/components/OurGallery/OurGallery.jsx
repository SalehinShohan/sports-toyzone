
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./OurGallery.css";

// import required modules
import {  EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="mySwiper w-full"
      >
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2Q5JREm9hMqoXOWx2SQs53OUJAZViLVXlA&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dy7MyjvFLmGLhUCpJw974t0dQGWYfpyHGw&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKfSPdMoorjvebrw9tHD4aqDjBoIBe2saj1g&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToz36_MpzHJ0ERJAk-y7aL7t1UDzkMRqhS6_K9cz9mU-qp9zayMQs0Abl5vk3bmOnBZ_E&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26-Tyy7HHLE4gZdF3qaMYApbX2N5EKLX9gg&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dy7MyjvFLmGLhUCpJw974t0dQGWYfpyHGw&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShM3pNrUv9ta79dX-f1_aZhpgqbz4sEx7U4A&usqp=CAU" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.etsystatic.com/23371643/r/il/94ae73/4812782409/il_fullxfull.4812782409_duyv.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ebayimg.com/images/g/-6EAAOSwPAxaTXvP/s-l1600.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
