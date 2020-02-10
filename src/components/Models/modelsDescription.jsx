import React from "react";
import Image from "react-async-image";
import what_are_models from "./what_are_models.png";
import { getModelsTitle } from "./../common/helpers";

const ModelsDescription = () => {
  return (
    <section className="mw8 center">
      <h2 className="athelas ph3 ph0-l">So what are models?</h2>
      <article className="pv4 bt bb b--black-10 ph3 ph0-l">
        <div className="flex flex-column flex-row-ns">
          <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
            <p className="f5 f5-l lh-copy athelas tl">{getModelsTitle()}</p>
          </div>
          <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
            <Image
              className="image"
              placeholder={<div className="placeholder">oops</div>}
              src={what_are_models}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default ModelsDescription;
