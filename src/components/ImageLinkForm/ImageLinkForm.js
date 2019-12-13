import React from "react";
import Button from "../Forms/button";
import "./ImageLinkForm.css";

const ImageLinkForm = ({
  title,
  onInputChange,
  onPictureSubmit,
  errors,
  loading
}) => {
  return (
    <div>
      <p className="f3">{title}</p>
      {errors && (
        <div className="br2 pa1 ma1 red" style={{ fontSize: "x-large" }}>
          {errors}
        </div>
      )}
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            placeholder="Put image url"
            onChange={onInputChange}
          />
          <Button
            value="Detect"
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            action={onPictureSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
