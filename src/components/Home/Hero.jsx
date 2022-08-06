import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImg1 from "./../../assets/hero-1.jpg";
import HeroImg2 from "./../../assets/hero-2.jpg";
import { Navigation } from "swiper";
import HeroCard from "./HeroCard";

const Hero = () => {
  const heroCardContent = [
    {
      title: "Application Development",
      description:
        "Fully Equipped with the expertise to build Technology Application.",
      buttonTitle: "Services",
      buttonLink: "/",
    },
    {
      title: "Welcome TO Infotech Global Limited India.",
      description:
        "We help our clients find the right problems to solve, and to solve these effectively...",
      buttonTitle: "About Us",
      buttonLink: "/",
    },
  ];

  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${HeroImg1})`,
              backgroundSize: "cover",
            }}
          >
            <div className="relative">
              <div className="container">
                <HeroCard content={heroCardContent[0]} />
              </div>
              <img
                src={HeroImg1}
                alt=""
                className="opacity-0  md:min-h-[630px] min-h-[760px]"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${HeroImg2})`,
              backgroundSize: "cover",
            }}
          >
            <div className="relative">
              <div className="container ">
                <HeroCard content={heroCardContent[1]} />
              </div>
              <img
                src={HeroImg2}
                alt=""
                className="opacity-0  md:min-h-[630px] min-h-[760px]"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
