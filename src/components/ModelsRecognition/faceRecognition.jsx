import React from "react";
import Rank from "../Rank/Rank";
import { Redirect } from "react-router-dom";
import ImageLinkForm from "./../ImageLinkForm/ImageLinkForm";
import FacesRendering from "../Rendering/facesRendering";
import Loader from "../common/loader";

const FaceRecognition = ({
  name,
  title,
  entries,
  boxes,
  urlImage,
  errors,
  loading,
  onInputChange,
  onPictureSubmit,
  ...props
}) => {
  if (name) {
    return (
      <React.Fragment>
        <Rank name={name} entries={entries} />
        <ImageLinkForm
          onInputChange={onInputChange}
          onPictureSubmit={onPictureSubmit}
          title={title}
          errors={errors}
          loading={loading}
        />
        <FacesRendering boxes={boxes} urlImage={urlImage} />
        <Loader loading={loading} />
      </React.Fragment>
    );
  } else {
    return <Redirect from="/face" to="/login" />;
  }
};

export default FaceRecognition;
