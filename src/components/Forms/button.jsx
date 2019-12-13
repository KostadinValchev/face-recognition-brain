import React from "react";

const Button = ({ value, className, action, loading = "" }) => {
  return (
    <button className={className} onClick={action} disabled={loading}>
      {value}
    </button>
  );
};

export default Button;
