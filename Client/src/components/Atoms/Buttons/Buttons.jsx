import React from "react";

const Button = ({
  children,
  variant = "primary", // 'primary' | 'secondary' | 'ghost'
  color = "#0E6BA8", // Accept color from parent
  onClick,
  disabled = false,
  className = "",
  style = {},
  rounded = "rounded",
  ...props
}) => {
  const baseClasses = `px-4 cursor-pointer py-2 ${rounded} flex items-center gap-1 transition font-medium focus:outline-none focus:ring-2 focus:ring-offset-2`;

  // Use passed color or fallback to current text color
  const buttonColor = color || "currentColor";

  const variantStyles = {
    primary: {
      backgroundColor: buttonColor,
      color: "#fff",
      border: "none",
      hover: { opacity: 0.9 },
    },
    secondary: {
      backgroundColor: "transparent",
      color: buttonColor,
      border: `1px solid ${buttonColor}`,
      hover: { opacity: 0.8 },
    },
    ghost: {
      backgroundColor: "transparent",
      color: buttonColor,
      border: "none",
      hover: { backgroundColor: "rgba(0,0,0,0.05)" },
    },
  };

  const currentStyle = variantStyles[variant];
  const disabledStyle = disabled ? { opacity: 0.5, cursor: "not-allowed" } : {};

  const handleMouseOver = (e) => {
    if (disabled) return;
    Object.keys(currentStyle.hover || {}).forEach((key) => {
      e.target.style[key] = currentStyle.hover[key];
    });
  };

  const handleMouseOut = (e) => {
    if (disabled) return;
    Object.keys(currentStyle.hover || {}).forEach((key) => {
      e.target.style[key] = "";
    });
  };

  return (
    <button
      className={`${baseClasses} ${className}`}
      style={{
        ...currentStyle,
        ...disabledStyle,
        ...style,
      }}
      onClick={onClick}
      disabled={disabled}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
