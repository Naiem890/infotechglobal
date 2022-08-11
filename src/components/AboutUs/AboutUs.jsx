import React from "react";
import Partner from "../Home/Partner";
import Banner from "../Shared/Banner";
import AboutUsBannerImg from "./../../assets/about-us-banner.jpg";
import AboutContent from "./AboutContent";

const AboutUs = () => {
  return (
    <div>
      <Banner BannerImg={AboutUsBannerImg} BannerText={"About"} />
      <AboutContent />
      <Partner />
    </div>
  );
};

export default AboutUs;
