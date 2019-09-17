import React from "react";
import Form from "./form";
import Loader from "../common/loader";
import {
  accountData,
  accountActions,
  inputClassName
} from "../common/constants";

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
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                {this.renderInput(
                  "text",
                  accountData.name,
                  accountData.name,
                  inputClassName,
                  accountData.nameLebal
                )}
              </div>
              <div className="mt3">
                {this.renderInput(
                  accountData.email,
                  accountData.email,
                  accountData.email,
                  inputClassName,
                  accountData.emailLabel
                )}
              </div>
              <div className="mv3">
                {this.renderInput(
                  accountData.password,
                  accountData.password,
                  accountData.password,
                  inputClassName,
                  accountData.passwordLabel
                )}
              </div>
            </fieldset>
            <div>
              {this.renderButton(
                accountData.registerLabel,
                accountActions.register
              )}
            </div>
            <Loader loading={this.state.loading} />
          </div>
        </main>
      </article>
    );
  }
}

export default RegisterForm;
