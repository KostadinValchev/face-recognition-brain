import React, { lazy, Suspense } from "react";

import {food, faces, apparel, general, colors } from "./constants";
import ModelBox from "./modelBox";
import ScrollToTopOnMount from "../common/scrollToTopOnMount";

const ModelsDescription = lazy(() => import("./modelsDescription"));

const Models = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTopOnMount />
      <ModelsDescription />
      <div className="modelsContainer">
        <ModelBox type="Food" path="food" img={food} />
        <ModelBox type="Faces" path="face" img={faces} />
        <ModelBox type="Apparel" path="apparel" img={apparel} />
        <ModelBox type="General" path="general" img={general} />
        <ModelBox type="Colors" path="color" img={colors} />
      </div>
    </Suspense>
  );
};

export default Models;
