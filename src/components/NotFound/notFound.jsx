import React, { Component } from "react";
import "./notFound.css";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
            <h2>Page not found</h2>
          </div>
          <div className="home-btn">
            <input
              onClick={() => this.props.history.push("/")}
              className="b ph3 pv3 input-reset ba b--black grow pointer f9 dib bg-transparent"
              type="button"
              value="GO TO HOMEPAGE"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
