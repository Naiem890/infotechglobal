import React from "react";
import FacebookIcon from "./../../assets/facebook.svg";
import LinkedinIcon from "./../../assets/linkedin.svg";

const FooterCopyRight = () => {
  return (
    <div className="border-t-2 border-gray-700 py-4 flex justify-between">
      <div>
        © Copyright {new Date().getFullYear()} iglind. All Rights Reserved.
      </div>
      <div className="flex gap-4">
        <a
          href="/"
          className="bg-dark-blue h-8 w-8  flex justify-center items-center rounded"
        >
          <img src={FacebookIcon} alt="" />
        </a>
        <a
          href="/"
          className="bg-dark-blue h-8 w-8  flex justify-center items-center rounded"
        >
          <img src={LinkedinIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default FooterCopyRight;
