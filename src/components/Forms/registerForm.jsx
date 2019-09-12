import React from "react";
import Form from "./form";
import Loader from "../common/loader";

class RegisterForm extends Form {
  constructor(props) {
    super(props);
    this.state = {
      account: { email: "", password: "", name: "" },
      loading: false,
      errors: {}
    };
  }

  render() {
    const className =
      "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100";
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                {this.renderInput("text", "name", "name", className, "Name")}
              </div>
              <div className="mt3">
                {this.renderInput(
                  "email",
                  "email",
                  "email",
                  className,
                  "Email"
                )}
              </div>
              <div className="mv3">
                {this.renderInput(
                  "password",
                  "password",
                  "password",
                  className,
                  "Password"
                )}
              </div>
            </fieldset>
            <div>{this.renderButton("Register", "register")}</div>
            <Loader loading={this.state.loading} />
          </div>
        </main>
      </article>
    );
  }
}

export default RegisterForm;
