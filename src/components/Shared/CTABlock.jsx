import { PhoneIcon } from "@heroicons/react/solid";
import React from "react";
import CTAImg from "./../../assets/cta-background.jpg";
const CTABlock = () => {
  return (
    <div className="rounded-md overflow-hidden relative text-center text-white">
      <div className="">
        <img src={CTAImg} alt="" />
      </div>
      <div className="absolute w-full py-12 px-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[70px] h-[70px] rounded-full bg-white flex items-center justify-center mx-auto mb-8">
          <PhoneIcon className="h-6 w-6 text-dark-blue" />
        </div>
        <div>
          <h3 className="text-2xl font-bold font-poppins mb-4">
            Have any Questions? Call us Today!
          </h3>
          <a
            href="tel:+916739753105"
            className="text-3xl font-bold font-poppins"
          >
            (+91)6739753105
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTABlock;
