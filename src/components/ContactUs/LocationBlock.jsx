import { LocationMarkerIcon } from "@heroicons/react/outline";
import React from "react";

const LocationBlock = ({ location }) => {
  return (
    <div className="flex gap-4 ">
      <div className="flex-shrink-0">
        <LocationMarkerIcon className="w-9 h-9" />
      </div>
      <div>
        <h4 className="text-lg font-poppins mb-2 font-semibold">
          {location.country}
        </h4>
        <p>{location.address}</p>
      </div>
    </div>
  );
};

export default LocationBlock;
