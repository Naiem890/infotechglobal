import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import React from "react";

const FooterContactInfo = () => {
  return (
    <>
      <h3 className="mb-8 font-poppins font-bold text-2xl">Contact Info</h3>
      <ul>
        <li className="mt-6">
          <div className=" flex gap-6 items-start">
            <LocationMarkerIcon className="w-6 h-6 flex-shrink-0" />
            <div>
              Block 1,6TH FLOOR, Rd, DLF Cyber City, Indira Nagar, Gachibowli,
              HYD.
            </div>
          </div>
        </li>
        <li className="mt-6">
          <div className="flex gap-6 items-start">
            <PhoneIcon className="w-6 h-6 flex-shrink-0" />
            <a href="tel:+919182900674">(+91) 9182900674</a>
          </div>
        </li>
        <li className="mt-6">
          <div className="flex gap-6 items-start">
            <MailIcon className="w-6 h-6 flex-shrink-0" />
            <a href="mailto:info@iglind.com">info@iglind.com</a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FooterContactInfo;
