import React, { Component } from "react";
import "./facesRendering.css";

class FacesRendering extends Component {
  render() {
    const elements = this.props.boxes;
    const boxes = [];
    elements.map((value, index) => {
      return boxes.push(
        <div
          key={index}
          className="bounding-box"
          style={{
            top: value.topRow,
            right: value.rightCol,
            bottom: value.bottomRow,
            left: value.leftCol
          }}
        ></div>
      );
    });

    return (
      <div className="center ma">
        <div className="absolute mt2">
          <img
            id="inputimage"
            src={this.props.urlImage}
            alt=""
            width="500px"
            height="auto"
          />
          {boxes}
        </div>
      </div>
    );
  }
}

export default FacesRendering;
