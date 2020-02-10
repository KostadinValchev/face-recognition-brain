import React from "react";
import Tilt from "react-tilt";
import { Link } from "react-router-dom";
import Image from "react-async-image";

import "./modelBox.styles.css";

const ModelBox = ({ type, path, img }) => {
  return (
    <Link to={"/" + path}>
      <div className="ma4">
        <h2>{type}</h2>
        <Tilt
          className="br2 shadow-1 item-box"
          options={{ max: 45 }}
          style={{ height: 250, width: 250 }}
        >
          <div className="Tilt-inner pa3">
            <Image
              className="image"
              placeholder={<div className="placeholder">oops</div>}
              src={img}
            />
          </div>
        </Tilt>
      </div>
    </Link>
  );
};

export default ModelBox;
