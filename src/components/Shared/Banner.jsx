import React from "react";

const Banner = ({ BannerImg, BannerText }) => {
  return (
    <div className="relative">
      <img
        src={BannerImg}
        alt=""
        srcset=""
        className="md:h-64 h-48 object-cover object-left-top w-screen"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 container">
        <h1 className="font-poppins text-5xl text-white font-bold text-center drop-shadow">
          {BannerText}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
