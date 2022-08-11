import React from "react";
import { HashLink } from "react-router-hash-link";

const ServiceCard = ({ service }) => {
  console.log(service);
  return (
    <div className="px-4 pt-4 pb-7  shadow-2 ">
      <div className="mb-5 overflow-hidden">
        <img
          src={service.image}
          className="hover:scale-110 transition-all duration-[900ms]"
          alt=""
        />
      </div>
      <div>
        <h3 className="font-poppins text-2xl font-bold text-center mb-2">
          <HashLink to={`/service-details/${service.serviceLink}/#`}>
            {service.serviceName}
          </HashLink>
        </h3>
      </div>
    </div>
  );
};

export default ServiceCard;
