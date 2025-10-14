import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/styles/theme"; // apna theme ka path

const LinkText = ({ to, children, className = "", type = "dashboard", ...props }) => {
  const theme = useTheme(type);

  return (
    <Link
      to={to}
      className={`hover:underline font-medium ${className}`}
      style={{ color: theme.primary }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default LinkText;
