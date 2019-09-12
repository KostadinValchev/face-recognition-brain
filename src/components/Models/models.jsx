import React from "react";
import ModelBox from "./modelBox";
import food from "./food.png";
import faces from "./faces.png";
import apparel from "./apparel.png";
import general from "./general.png";
import colors from "./colors.png";
// import video from "./video.png";
import what_are_models from "./what_are_models.png";
import { getModelsTitle } from "./../common/helpers";
import ScrollToTopOnMount from "../common/scrollToTopOnMount";

const Models = () => {
  return (
    <React.Fragment>
      <ScrollToTopOnMount />
      <section className="mw8 center">
        <h2 className="athelas ph3 ph0-l">So what are models?</h2>
        <article className="pv4 bt bb b--black-10 ph3 ph0-l">
          <div className="flex flex-column flex-row-ns">
            <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
              <p className="f5 f5-l lh-copy athelas tl">{getModelsTitle()}</p>
            </div>
            <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
              <img
                rel="preload"
                style={{ paddingTop: "5px" }}
                alt="brain logo"
                src={what_are_models}
              />
            </div>
          </div>
        </article>
      </section>
      <div className="modelsContainer">
        <ModelBox type="Food" path="food" img={food} />
        <ModelBox type="Faces" path="face" img={faces} />
        <ModelBox type="Apparel" path="apparel" img={apparel} />
        <ModelBox type="General" path="general" img={general} />
        <ModelBox type="Colors" path="color" img={colors} />
        {/* <ModelBox type="Video" path="video" img={video} /> */}
      </div>
    </React.Fragment>
  );
};

export default Models;
