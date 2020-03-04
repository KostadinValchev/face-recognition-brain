import React from "react";
import Image from "react-async-image";


const ArticleModel = ({ content, img, direction }) => {
  const style = direction ? "flex-row-ns" : "flex-row-reverse-ns";
  return (
    <article className="pv4 bt bb b--black-10 ph3 ph0-l">
      <div className={"flex flex-column " + style}>
        <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
          <h1 className="f3 athelas mt0 lh-title">Face recognition</h1>
          <p className="f5 f4-l lh-copy athelas">{content}</p>
        </div>
        <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
          <Image
            className="image"
            placeholder={<div className="placeholder">oops</div>}
            loading="lazy"
            src={img}
          />
        </div>
      </div>
    </article>
  );
};

export default ArticleModel;
