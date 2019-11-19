import React from "react";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import ImageRendering from "../Rendering/imageRendering";
import ColorListRendering from "../Rendering/colorListRendering";
import Loader from "./../common/loader";
import { Redirect } from "react-router-dom";

const ColorRecognition = ({
  userId,
  title,
  urlImage,
  colors,
  errors,
  loading,
  onInputChange,
  onColorPictureSubmit,
  ...props
}) => {
  if (userId) {
    return (
      <React.Fragment>
        <ImageLinkForm
          title={title}
          onInputChange={onInputChange}
          onPictureSubmit={onColorPictureSubmit}
          errors={errors}
          loading={loading}
        />
        <div className="food-data-container">
          {urlImage && (
            <React.Fragment>
              <ImageRendering urlImage={urlImage} />
              <ColorListRendering colors={colors} />
            </React.Fragment>
          )}
        </div>
        <Loader loading={loading} />
      </React.Fragment>
    );
  } else {
    return <Redirect from="/color" to="/login" />;
  }
};

export default ColorRecognition;
