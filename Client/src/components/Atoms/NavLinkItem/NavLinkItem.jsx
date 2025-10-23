import React from "react";

const NavLinkItem = ({
  link,
  isActive,
  onClick,
  variant = "sidebar",
  colors,
}) => {
  const iconSize = variant === "sidebar" ? (isActive ? 36 : 28) : 24;

  if (variant === "bottombar") {
    return (
      <div
        className={`flex flex-col items-center justify-center flex-1`}
        onClick={onClick}
      >
        <div>
          {link.icon && (
            <link.icon
              size={iconSize}
              weight={isActive ? "fill" : "regular"}
              color={isActive ? colors.secondary : colors.text}
            />
          )}
        </div>
        <p
          className={`text-xs ${isActive && "font-semibold"}`}
          style={{
            color: isActive ? colors.secondary : colors.text,
          }}
        >
          {link.name}
        </p>
      </div>
    );
  }

  // Sidebar variant
  return (
    <div
      className={`nav-link p-4 lg:px-12 ${isActive ? "lg:bg-[#80808020]" : ""}`}
      onClick={onClick}
    >
      <div>
        {link.icon && (
          <link.icon
            size={iconSize}
            weight={isActive ? "fill" : "regular"}
            color={isActive ? colors.secondary : colors.text}
          />
        )}
      </div>
      {!isActive && <p>{link.name}</p>}
    </div>
  );
};

export default NavLinkItem;
