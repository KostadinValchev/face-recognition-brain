import React from "react";
import "./imageRendering.css";

const ImageRendering = ({ urlImage }) => {
  return (
    <div className="food-image-container shadow-1">
      <img src={urlImage} alt="" className="food-image" />
    </div>
  );
};

export default ImageRendering;
