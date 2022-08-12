import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";

const TLi = ({ children }) => {
  return (
    <li className="flex gap-2 items-start mb-2">
      <div className="flex-shrink-0">
        <CheckCircleIcon className="w-6 h-6 mt-1" />
      </div>
      <div className="leading-9">{children}</div>
    </li>
  );
};

export default TLi;
