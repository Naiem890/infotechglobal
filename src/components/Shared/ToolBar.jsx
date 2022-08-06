import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";
import React from "react";

import FacebookIcon from "./../../assets/facebook.svg";
import LinkedinIcon from "./../../assets/linkedin.svg";
import PinterestIcon from "./../../assets/pinterest.svg";
import TwitterIcon from "./../../assets/twitter.svg";

const ToolBar = () => {
  return (
    <div className="bg-dark-blue text-white  md:flex hidden  items-center text-sm">
      <div className="container pb-1 flex justify-between items-center">
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <MailIcon className="w-5 h-5" />
            <a href="mailto:info@iglind.com">info@iglind.com</a>
          </div>
          <div className="min-h-[32px] w-[1px] bg-green"></div>
          <div className="flex items-center gap-1">
            <PhoneIcon className="w-5 h-5" />
            <a href="tel:+919182900674">(+91) 9182900674</a>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex items-center gap-1">
            <LocationMarkerIcon className="w-5 h-5" />
            DLF BUILDING Gachibowli, Hyderabad
          </div>
          <div className="min-h-[32px] w-[1px] bg-green"></div>
          <div className="flex items-center gap-4">
            <a href="/">
              <img src={FacebookIcon} className="h-5" alt="" />
            </a>
            <a href="/">
              <img src={TwitterIcon} className="h-5" alt="" />
            </a>
            <a href="/">
              <img src={PinterestIcon} className="h-5" alt="" />
            </a>
            <a href="/">
              <img src={LinkedinIcon} className="h-5" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolBar;
