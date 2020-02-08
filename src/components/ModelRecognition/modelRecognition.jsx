import React from "react";
import Rank from "../Rank/Rank";
import ImageLinkForm from "../ImageLinkForm/ImageLinkForm";
import ImageRendering from "../Rendering/imageRendering";
import FacesRendering from "./../Rendering/facesRendering";
import DataListRendering from "../Rendering/dataListRendering";
import ColorListRendering from "./../Rendering/colorListRendering";
import Loader from "../common/loader";
import { Redirect } from "react-router-dom";

const ModelRecognition = ({
  userId,
  name,
  title,
  image,
  boxes,
  entries,
  concepts,
  isFaceConcept,
  isColorConcept,
  errors,
  loading,
  onInputChange,
  onUploadFileHandler,
  onPictureSubmit,
  ...props
}) => {
  if (userId) {
    return (
      <React.Fragment>
        {name && <Rank name={name} entries={entries} />}
        <ImageLinkForm
          title={title}
          onInputChange={onInputChange}
          onUploadFileHandler={onUploadFileHandler}
          onPictureSubmit={onPictureSubmit}
          errors={errors}
          loading={loading}
        />
        {isFaceConcept ? (
          <FacesRendering boxes={boxes} image={image} />
        ) : (
          concepts.length > 0 && (
            <div className="food-data-container">
              <React.Fragment>
                <ImageRendering image={image} />
                {isColorConcept ? (
                  <ColorListRendering colors={concepts} />
                ) : (
                  <DataListRendering concepts={concepts} />
                )}
              </React.Fragment>
            </div>
          )
        )}
        <Loader loading={loading} />
      </React.Fragment>
    );
  } else {
    return <Redirect from="/general" to="/login" />;
  }
};

export default ModelRecognition;
