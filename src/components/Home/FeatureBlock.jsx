import React from "react";

const FeatureBlock = ({ img, title }) => {
  return (
    <div className="bg-light-blue p-7 text-center shadow-1 rounded-md ">
      <div className="mb-6">
        <img className="max-w-[70px] mx-auto" src={img} alt="" />
      </div>
      <h5 className="text-xl font-semibold mb-2 font-poppins">
        <a href="/">{title}</a>
      </h5>
    </div>
  );
};

export default FeatureBlock;
