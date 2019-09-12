import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 45 }}
        style={{ height: 150, width: 150 }}
      >
        <Link to="/">
          <div className="Tilt-inner pa3">
            <img style={{ paddingTop: "5px" }} alt="brain logo" src={brain} />
          </div>
        </Link>
      </Tilt>
    </div>
  );
};

export default Logo;
