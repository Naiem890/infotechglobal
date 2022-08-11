import React from "react";
import ServicesSection from "../Home/ServicesSection";
import Banner from "../Shared/Banner";
import ServiceBannerImage from "./../../assets/career-banner.jpg";

const Services = () => {
  return (
    <div>
      <Banner BannerImg={ServiceBannerImage} BannerText={"Services"} />
      <ServicesSection />
    </div>
  );
};

export default Services;
