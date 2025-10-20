import { lightenColor } from "@/utils/helpers/colorsHelper";
import React, { useState } from "react";

const TabComponent = ({
  tabs = [],
  primaryColor = "#0E6BA8",
  variant = "default", // 'default' | 'pill' | 'underline' | 'vertical'
  className = "",
  grayBg,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const getTabClasses = (index) => {
    const baseClasses =
      "px-3 lg:px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 whitespace-nowrap";
    const isActive = index === activeTab;

    switch (variant) {
      case "pill":
        return `${baseClasses} mx-1 lg:mx-2 rounded-full ${
          isActive ? "" : "hover:bg-[rgba(0,0,0,0.1)]"
        }`;

      case "underline":
        return `${baseClasses} flex-1 text-center ${
          isActive
            ? "border-b-4 font-semibold"
            : "text-gray-500 hover:text-gray-700"
        }`;

      case "vertical":
        return `${baseClasses} text-left w-full ${
          isActive ? "" : "hover:bg-[rgba(0,0,0,0.1)]"
        }`;

      default: // default
        return `${baseClasses} rounded-tr-md rounded-tl-md flex-1 text-center ${
          isActive ? `font-semibold` : "hover:bg-[rgba(0,0,0,0.1)]"
        }`;
    }
  };

  const getTabStyle = (index) => {
    if (index !== activeTab) return {};

    if (variant === "underline") {
      return {
        borderColor: primaryColor,
        color: primaryColor,
        borderBottomWidth: "4px",
        borderRadius: "4px",
      };
    } else {
      return {
        backgroundColor: lightenColor(primaryColor, 30),
        border: "none",
        ...(variant === "default" && { opacity: 0.9 }),
      };
    }
  };

  const containerClasses = () => {
    switch (variant) {
      case "vertical":
        return "flex flex-col lg:flex-row";
      case "underline":
      case "default":
        return "border-b flex overflow-x-auto lg:overflow-visible";
      default:
        return "flex overflow-x-auto lg:overflow-visible";
    }
  };

  const contentContainerClasses = () => {
    switch (variant) {
      case "vertical":
        return "flex-1 p-2 lg:p-6";
      default:
        return "p-2 lg:p-6";
    }
  };

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <button
        key={index}
        className={`cursor-pointer ${
          index !== activeTab && "text-gray-500"
        } ${getTabClasses(index)}`}
        onClick={() => setActiveTab(index)}
        style={getTabStyle(index)}
      >
        {tab.name}
      </button>
    ));
  };

  if (tabs.length === 0) return null;

  return (
    <div className={className}>
      <div
        className={`${
          variant !== "pill" && !grayBg && "border-gray-500"
        } ${containerClasses()}`}
        style={{ borderColor: grayBg }}
      >
        {variant === "vertical" ? (
          <>
            {/* Mobile: horizontal scroll */}
            <div className="flex gap-2 w-full overflow-x-auto lg:hidden">
              {renderTabs()}
            </div>
            {/* Desktop: sidebar */}
            <div
              className="hidden lg:flex lg:w-48 lg:flex-col lg:border-r"
              style={{ borderColor: primaryColor }}
            >
              {renderTabs()}
            </div>
          </>
        ) : (
          <div className="flex gap-2 w-full">{renderTabs()}</div>
        )}
      </div>

      <div className={contentContainerClasses()}>
        {tabs[activeTab]?.component}
      </div>
    </div>
  );
};

export default TabComponent;
