import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImg1 from "./../../assets/hero-1.jpg";
import HeroImg2 from "./../../assets/hero-2.jpg";
import { Navigation } from "swiper";
const Hero = () => {
  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="relative">
          <div
            style={{
              backgroundImage: `url(${HeroImg1})`,
              backgroundSize: "cover",
            }}
          >
            <img src={HeroImg1} alt="" className="opacity-0" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={HeroImg2} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
