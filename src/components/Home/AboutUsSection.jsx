import React from "react";
import AboutUsImage from "./../../assets/about1.png";
import AboutUsPoint from "./AboutUsPoint";
import AboutUsIcon1 from "./../../assets/about-us-icon-1.png";
import AboutUsIcon2 from "./../../assets/about-us-icon-2.png";
import Button from "../Shared/Button";

const AboutUsSection = () => {
  const aboutUsPoints = [
    {
      icon: AboutUsIcon1,
      title: "Infotech Global PVT LTD is a leading IT solutions provider",
      details:
        "offering Applications development, Consulting and Business Process Outsourcing services globally through a combination of technology, domain and process expertise",
    },
    {
      icon: AboutUsIcon2,
      title: "Vision and Trust for the changing world of Talent",
      details:
        "Global organizations invest millions in complex enterprise level projects.",
    },
  ];

  return (
    <div className="md:bg-[url('https://iglind.com/assets/images/about-bg.jpg')] bg-light-blue bg-top bg-cover">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="self-end md:mt-0 mt-16 -mx-[15px] md:-mx-0">
          <img src={AboutUsImage} alt="" />
        </div>
        <div className="md:ml-4 lg:ml-16 my-16">
          <div className="mb-10">
            <h6 className="uppercase font-medium font-poppins mb-2">
              About us
            </h6>
            <h2 className="text-4xl font-poppins font-bold">
              Welcome to Infotech Global Limited India. (IGLIND)
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {aboutUsPoints.map((point, i) => (
              <AboutUsPoint key={i} point={point} />
            ))}
          </div>
          <Button className="bg-dark-blue hover:bg-light-green mt-6 text-white">
            Know More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
