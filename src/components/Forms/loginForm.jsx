import React from "react";
import Form from "./form";
import Loader from "./../common/loader";
import StatusMessage from "./../common/statusMessage";
import { inputClassName } from "../common/constants";


class LoginForm extends Form {
  state = {
    account: { email: "", password: "", name: "" },
    status: { type: "", message: "" },
    loading: false,
    errors: {}
  };
  render() {
    const { onRouteChange } = this.props;
    const { loading } = this.state;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center ">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                {this.renderInput(
                  "email",
                  "email",
                  "email",
                  inputClassName,
                  "Email"
                )}
              </div>
              <div className="mv3">
                {this.renderInput(
                  "password",
                  "password",
                  "password",
                  inputClassName,
                  "Password"
                )}
              </div>
            </fieldset>
            {this.state.status.type !== "" && (
              <StatusMessage
                type={this.state.status.type}
                message={this.state.status.message}
              />
            )}
            <div className="">
              <div>{this.renderButton("Login", "login")}</div>
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
            <Loader loading={loading} />
          </div>
        </main>
      </article>
    );
  }
}

export default LoginForm;
