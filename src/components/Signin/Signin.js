import React, { Component } from "react";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      loading: false
    };
  }

  onEmailChange = event => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.setState({ loading: false });
          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: red;
    `;
    const { onRouteChange } = this.props;
    const { loading } = this.state;
    const classes = "b ph3 pv2 input-reset ba b--black grow pointer f6 dib";
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email{" "}
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className={loading ? classes : classes + " bg-transparent"}
                type="button"
                value="Sign in"
                disabled={loading}
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                href="#0"
                className="f6 link dim black db pointer"
                disabled={loading}
              >
                Register
              </p>
            </div>
          </div>
          <div className="sweet-loading" style={{ marginTop: 20 }}>
            <RingLoader
              css={override}
              sizeUnit={"px"}
              size={50}
              color={"#1B1C1B"}
              loading={loading}
            />
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
