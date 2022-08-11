import React from "react";
import Banner from "../Shared/Banner";
import AboutUsBannerImg from "./../../assets/about-us-banner.jpg";

const AboutUs = () => {
  return (
    <div>
      <Banner BannerImg={AboutUsBannerImg} BannerText={"About"} />
    </div>
  );
};

export default AboutUs;
