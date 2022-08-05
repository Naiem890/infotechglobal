import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

import PartnerImg1 from "./../../assets/partner-1.png";
import PartnerImg2 from "./../../assets/partner-2.png";
import PartnerImg3 from "./../../assets/partner-3.png";
import PartnerImg4 from "./../../assets/partner-4.png";
import PartnerImg5 from "./../../assets/partner-5.png";
import PartnerImg6 from "./../../assets/partner-6.png";
import PartnerImg7 from "./../../assets/partner-7.png";

const Partner = () => {
  return (
    <div className="container  my-10">
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 3,
          },
          768: {
            width: 768,
            slidesPerView: 4,
          },
          1024: {
            width: 1024,
            slidesPerView: 6,
          },
        }}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={PartnerImg1} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PartnerImg2} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PartnerImg3} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PartnerImg4} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PartnerImg5} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PartnerImg6} alt="" srcset="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PartnerImg7} alt="" srcset="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Partner;
