import React from "react";
import Button from "./../Forms/button";
import { headers, buttonStyles } from "./constants";

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
                <Button
                  value="Sign In"
                  className={buttonStyles.default}
                  action={() => props.history.push("/login")}
                />
              </div>
              <div className="home-btn">
                <Button
                  value="Register"
                  className={buttonStyles.default}
                  action={() => props.history.push("/register")}
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
