import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Banner from "../Shared/Banner";
import ServiceDetailsImg from "./../../assets/service-details-banner.jpg";
import ServicesList from "../../data/serviceslist";
import { ChevronRightIcon } from "@heroicons/react/outline";
import CTABlock from "../Shared/CTABlock";

const ServiceDetails = () => {
  const location = useLocation();
  const [bannerText, setBannerText] = useState("");

  useEffect(() => {
    const pathname = location.pathname.split("/")[2].toLowerCase();
    for (let i = 0; i < ServicesList.length; i++) {
      if (pathname === ServicesList[i].serviceLink.toLowerCase()) {
        setBannerText(ServicesList[i].serviceShortName);
      }
    }
  }, [location.pathname, setBannerText]);

  return (
    <div>
      <Banner BannerText={bannerText} BannerImg={ServiceDetailsImg} />
      <div className="container my-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Outlet />
          </div>
          <div className="md:col-span-1">
            <div className="service-details-nav">
              {ServicesList.map((service) => (
                <NavLink
                  to={service.serviceLink}
                  className="font-bold p-4 border-2 border-gray-200 rounded-lg flex justify-between w-full mt-3 hover:text-white transition-all duration-900 hover:bg-dark-blue"
                >
                  {service.serviceName}
                  <ChevronRightIcon className="h-6 w-6" />
                </NavLink>
              ))}
            </div>
            <div className="my-12">
              <CTABlock />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
