import React from "react";

const Button = ({ children, className }) => {
  return (
    <button
      className={`px-7 py-4 rounded-sm uppercase font-poppins font-medium cursor-pointer transition-all duration-300    ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
