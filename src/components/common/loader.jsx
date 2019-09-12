import React from "react";
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";

const Loader = ({ loading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;
  return (
    <div className="sweet-loading" style={{ marginTop: 20 }}>
      <RingLoader
        css={override}
        sizeUnit={"px"}
        size={100}
        color={"#1B1C1B"}
        loading={loading}
      />
    </div>
  );
};

export default Loader;
