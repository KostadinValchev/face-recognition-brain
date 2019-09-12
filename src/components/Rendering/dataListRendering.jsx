import React from "react";

const DataListRendering = ({ concepts }) => {
  return (
    <div className="food-items shadow-1">
      <h3 className="athelas ph3 ph0-l bb">PREDICTED CONCEPT</h3>
      <ul className="food-items-ul">
        {concepts.map((concept, index) => {
          return (
            <li
              key={index}
              className="food-li dib f6 f5-ns b br3 pa2 link dim dark-gray ba b--black-20"
            >
              {concept.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DataListRendering;
