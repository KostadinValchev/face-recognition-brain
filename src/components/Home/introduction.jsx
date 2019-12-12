import React from "react";
import { headers } from "./constants";

const Introduction = ({ userId, props }) => {
  return (
    <article className="br3 ba dark-gray b--black-10  w-100  w-80-l  shadow-3 center homeart">
      <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">{headers.main}</h1>
      <main className="pa4 black-80 homemain">
        <div className="measure">
          <h2 className="fw1 f3 white-80 mt3 mb4">{headers.second}</h2>
          {!userId && (
            <div className="homebtn-container">
              <div className="home-btn">
                <input
                  onClick={() => props.history.push("/login")}
                  className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-transparent"
                  type="button"
                  value="Sign In"
                />
              </div>
              <div className="home-btn">
                <input
                  onClick={() => props.history.push("/register")}
                  className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-transparent"
                  type="button"
                  value="Register"
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </article>
  );
};

export default Introduction;
