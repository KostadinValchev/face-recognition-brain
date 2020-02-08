import React from "react";
import "./imageRendering.css";

const ImageRendering = ({ image }) => {
  return (
    <div className="food-image-container shadow-1">
      <img src={image} alt="" className="food-image" />
    </div>
  );
};

export default ImageRendering;
