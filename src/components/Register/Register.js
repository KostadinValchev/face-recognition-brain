import React, { Component } from "react";
import { css } from "@emotion/core";
import { RingLoader } from "react-spinners";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      loading: false
    };
  }

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  onSubmitRegister = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name
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
    const classes = "b ph3 pv2 input-reset ba b--black grow pointer f6 dib";
    const { loading } = this.state;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Name </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6">Email </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSubmitRegister}
                className={loading ? classes : classes + " bg-transparent"}
                type="button"
                value="Register"
                disabled={loading}
              />
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
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
