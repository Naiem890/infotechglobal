import React from "react";
import ServiceCard from "./ServiceCard";
import ServicesList from "../../data/serviceslist";

const ServicesSection = ({ serviceCount = ServicesList.length }) => {
  return (
    <div className="bg-light-gray">
      <div className="container pt-24 pb-16 ">
        {/* Service description content */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-12 items-center mb-16">
          <div className="flex-1 md:text-right text-center">
            <div className="font-poppins font-medium mb-2">
              Infotech Global Limited India
            </div>
            <h2 className="font-poppins font-bold text-4xl">
              Premium Services
            </h2>
          </div>
          <div className="w-[2px] bg-slate-800 h-0 md:h-20"></div>
          <div className="flex-1 text-gray-700 md:text-left text-center md:pr-12">
            <p>
              Global organizations invest millions in complex enterprise level
              projects. In order to successfully complete the project within the
              given timelines, companies need skilled resources who can help
              them achieve this.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-7 items-start">
          {ServicesList.slice(0, serviceCount).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
