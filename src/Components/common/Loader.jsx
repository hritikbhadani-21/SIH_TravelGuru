// src/components/common/Loader.jsx
import React from "react";

const Loader = ({ size = 40, color = "orange" }) => {
  return (
    <div
      className="loader"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderTopColor: color,
      }}
    ></div>
  );
};

export default Loader;
