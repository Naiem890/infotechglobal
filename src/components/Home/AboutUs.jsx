import React from "react";
import AboutUsImage from "./../../assets/about1.png";
import AboutUsPoint from "./AboutUsPoint";
import AboutUsIcon1 from "./../../assets/about-us-icon-1.png";
import AboutUsIcon2 from "./../../assets/about-us-icon-2.png";

const AboutUs = () => {
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
    <div className="bg-[url('https://iglind.com/assets/images/about-bg.jpg')] bg-top bg-cover">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="self-end">
          <img src={AboutUsImage} alt="" />
        </div>
        <div className="ml-16 my-16">
          <div className="mb-10">
            <h6 className="uppercase font-poppins mb-2">About us</h6>
            <h2 className="text-4xl font-poppins font-bold">
              Welcome to Infotech Global Limited India. (IGLIND)
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            {aboutUsPoints.map((point, i) => (
              <AboutUsPoint key={i} point={point} />
            ))}
          </div>
          <button className="px-7 py-4 mt-8 rounded-sm uppercase font-poppins font-medium text-white transition-all bg-dark-blue  hover:bg-light-green">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
