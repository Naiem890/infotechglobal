import React from "react";

const AboutUsPoint = ({ point }) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <img className="w-20 h-20" src={point.icon} alt="" />
      </div>
      <div>
        <h4 className="text-xl font-poppins mb-3 font-medium">
          {point?.title}
        </h4>
        <p>{point?.details}</p>
      </div>
    </div>
  );
};

export default AboutUsPoint;
