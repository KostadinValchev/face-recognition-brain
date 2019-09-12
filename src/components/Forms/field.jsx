import React from "react";

const Field = ({ label, value, classes }) => {
  return (
    <div className={classes}>
      <p>{label}</p>
      <span>{value}</span>
    </div>
  );
};

export default Field;
