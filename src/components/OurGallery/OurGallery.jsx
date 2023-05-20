import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./OurGallery.css";
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

function OurGallery() {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS with options (optional)
  }, []);

  return (
    <>
      <Swiper
        data-aos="zoom-in"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
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
        className="mySwiper">
        <SwiperSlide className="">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1677788202272-f338958e28ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1564518073728-d947ff17f249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToz36_MpzHJ0ERJAk-y7aL7t1UDzkMRqhS6_K9cz9mU-qp9zayMQs0Abl5vk3bmOnBZ_E&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/185227119/photo/supercar-pocketknife.jpg?s=2048x2048&w=is&k=20&c=goezLUhNJCP4c-fSsZMeofflWIBCQcf6StLu_B87XmU="
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/96916047/photo/toy-police-car.jpg?s=2048x2048&w=is&k=20&c=NX9gq9nBakSZ8cJwVtvHAW8xFlAedrvECWB4GoXA8As="
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShM3pNrUv9ta79dX-f1_aZhpgqbz4sEx7U4A&usqp=CAU"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/499980252/photo/police-car-isolated.jpg?s=2048x2048&w=is&k=20&c=NrlmbTE-DVErvA2PAyMpdD2xa69ICYb9qWdh-bnhF-w="
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full"
            src="https://media.istockphoto.com/id/620006890/photo/toy-car-truck.jpg?s=2048x2048&w=is&k=20&c=RwAlzZoQG4zRpSvDe981Gr89WNsODt0f8wgzGUsXzno="
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default OurGallery;
