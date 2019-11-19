import React from "react";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import ImageRendering from "../Rendering/imageRendering";
import DataListRendering from "../Rendering/dataListRendering";
import Loader from "./../common/loader";
import { Redirect } from "react-router-dom";

const GeneralRecognition = ({
  userId,
  title,
  urlImage,
  concepts,
  errors,
  loading,
  onInputChange,
  onApparelPictureSubmit,
  ...props
}) => {
  if (userId) {
    return (
      <React.Fragment>
        <ImageLinkForm
          title={title}
          onInputChange={onInputChange}
          onPictureSubmit={onApparelPictureSubmit}
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
    return <Redirect from="/генерал" to="/login" />;
  }
};

export default GeneralRecognition;
