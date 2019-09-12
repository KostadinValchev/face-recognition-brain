import React from "react";

const Input = ({ type, name, id, className, label, error, onChange }) => {
  return (
    <React.Fragment>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor={name}>
          {label}
        </label>
        <input
          className={className}
          type={type}
          name={name}
          id={id}
          onChange={onChange}
        />
      </div>
      {error && <div className="br2 pa1 ma1 red">{error}</div>}
    </React.Fragment>
  );
};

export default Input;
