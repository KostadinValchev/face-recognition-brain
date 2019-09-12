import React from "react";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <Logo />
      {isSignedIn ? (
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            listStyleType: "none"
          }}
        >
          <li className="f3 dim black underline pa3 pointer">
            <Link to="/models">Models</Link>
          </li>
          <li className="f3 link dim black underline pa3 pointer">
            <Link to="/profile">Profile</Link>
          </li>
          <li
            onClick={() => onRouteChange("signout")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign Out
          </li>
        </ul>
      ) : (
        <ul
          style={{
            display: "flex",
            justifyContent: "flex-end",
            listStyleType: "none"
          }}
        >
          <li className="f3 link dim black underline pa3 pointer">
            <Link to="/login">Sign In</Link>
          </li>
          <li className="f3 link dim black underline pa3 pointer">
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
