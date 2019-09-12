import React from "react";

const StatusMessage = ({ type, message }) => {
  const classes = "br2 pa1 ma1 ";
  return (
    <div className={type === "success" ? classes + "green" : classes + "red"}>
      {message}
    </div>
  );
};

export default StatusMessage;
