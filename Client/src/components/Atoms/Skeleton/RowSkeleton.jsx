import React from "react";

const RowSkeleton = ({
  height = "20px",
  width = "100%",
  count = 1,
  className = "",
}) => {
  const shimmerStyle = {
    background:
      "linear-gradient(135deg, rgba(224,224,224,0.6) 25%, rgba(240,240,240,0.8) 50%, rgba(224,224,224,0.6) 75%)",
    backgroundSize: "200% 200%",
    animation: "shimmer 1.5s infinite",
  };

  return (
    <>
      <div className={`flex items-center space-x-4 ${className}`}>
        {[...Array(count)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-md"
            style={{
              height: height,
              width: width,
              ...shimmerStyle,
            }}
          />
        ))}
      </div>
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -100% -100%;
            }
            100% {
              background-position: 200% 200%;
            }
          }
        `}
      </style>
    </>
  );
};

export default RowSkeleton;
