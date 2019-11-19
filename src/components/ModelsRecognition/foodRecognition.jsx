import React from "react";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import ImageRendering from "../Rendering/imageRendering";
import DataListRendering from "../Rendering/dataListRendering";
import { Redirect } from "react-router-dom";
import Loader from "./../common/loader";

const FoodRecognition = ({
  userId,
  title,
  urlImage,
  concepts,
  errors,
  loading,
  onInputChange,
  onFoodPictureSubmit,
  ...props
}) => {
  // console.log(error)
  if (userId) {
    return (
      <React.Fragment>
        <ImageLinkForm
          title={title}
          onInputChange={onInputChange}
          onPictureSubmit={onFoodPictureSubmit}
          errors={errors}
          loading={loading}
        />
        <div className="food-data-container">
          {urlImage && (
            <React.Fragment>
              <ImageRendering urlImage={urlImage} />
              <DataListRendering concepts={concepts} />
            </React.Fragment>
          )}
        </div>
        <Loader loading={loading} />
      </React.Fragment>
    );
  } else {
    return <Redirect from="/food" to="/login" />;
  }
};

export default FoodRecognition;
