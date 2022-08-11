import React from "react";
import Banner from "../Shared/Banner";
import CareerBannerImg from "./../../assets/career-banner.jpg";
import CareerContent from "./CareerContent";
const Career = () => {
  return (
    <div>
      <Banner BannerImg={CareerBannerImg} BannerText={"Careers"} />
      <CareerContent />
    </div>
  );
};

export default Career;
