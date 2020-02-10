import React, { lazy, Suspense } from "react";

import ModelBox from "./modelBox";
import food from "./food.png";
import faces from "./faces.png";
import apparel from "./apparel.png";
import general from "./general.png";
import colors from "./colors.png";
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
