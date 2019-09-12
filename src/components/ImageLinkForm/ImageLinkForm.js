import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ title, onInputChange, onPictureSubmit, loading }) => {
  return (
    <div>
      <p className="f3">{title}</p>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Put image url"
            onChange={onInputChange}
          />
          <button
            onClick={onPictureSubmit}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            disabled={loading}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
