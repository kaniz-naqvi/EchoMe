import React from "react";

const P = ({ children, className = "", ...props }) => (
  <p
    className={`text-base leading-relaxed text-gray-700 ${className}`}
    {...props}
  >
    {children}
  </p>
);

export default P;
