import React from "react";
import "./colorListRendering.css";

const ColorListRendering = ({ colors }) => {
  return (
    <div className="color-list-container shadow-1">
      <ul className="food-items-ul">
        <div className="w3-light-grey">
          {colors.map((color, index) => {
            const classes =
              color.w3c.name === "Black"
                ? {
                    backgroundColor: color.w3c.name,
                    color: "white"
                  }
                : {
                    backgroundColor: color.w3c.name
                  };
            return (
              <div key={index} id="progressbar">
                <div style={classes} className="colorBar shadow-1">
                  {color.w3c.name} - {color.w3c.hex}{" "}
                  <strong id="percentage">
                    {Math.trunc((Math.round(color.value * 100) / 100) * 100)}%
                  </strong>
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default ColorListRendering;
