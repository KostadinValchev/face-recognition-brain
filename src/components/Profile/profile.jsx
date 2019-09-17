import React from "react";
import Form from "../Forms/form";
import profileIcon from "../../profileIcon.png";
import EntryCount from "./entryCount";
import Loader from "./../common/loader";
import { Redirect } from "react-router-dom";
import StatusMessage from "./../common/statusMessage";
import {
  accountData,
  accountActions,
  inputClassName,
  buttonClassName
} from "../common/constants";
import "./profile.css";

class Profile extends Form {
  state = {
    account: {
      password: "",
      newPassword: "",
      confirmPassword: ""
    },
    loading: false,
    status: { type: "", message: "" },
    errors: {}
  };
  render() {
    const { loading } = this.state;
    const {
      name,
      email,
      entries,
      faceEntries,
      apparelEntries,
      foodEntries,
      generalEntries,
      colorEntries
    } = this.props.user;
    if (this.props.userId) {
      return (
        <React.Fragment>
          <div className="box">
            <div className="container">
              <div className="left">
                <div className="image">
                  <img src={profileIcon} alt="" />
                </div>
                {this.renderField(accountData.nameLebal, name, accountActions.profile)}
                {this.renderField(accountData.emailLabel, email, accountActions.profile)}
                {this.renderInput(
                  accountData.password,
                  accountData.password,
                  accountData.password,
                  inputClassName,
                  accountData.oldPasswordLabel
                )}
                {this.renderInput(
                  accountData.pas,
                  accountData.newPassword,
                  accountData.newPassword,
                  inputClassName,
                  accountData.newPasswordLabel
                )}
                {this.renderInput(
                  accountData.password,
                  accountData.confirmPassword,
                  accountData.confirmPassword,
                  inputClassName,
                  accountData.confirmPasswordLabel
                )}
                <input
                  onClick={e => this.onSubmitResetPassword(e, email, accountActions.reset)}
                  className={
                    loading
                      ? buttonClassName
                      : buttonClassName + " bg-transparent"
                  }
                  type="button"
                  value="Change password"
                  disabled={loading}
                />
                {this.state.status.type !== "" && (
                  <StatusMessage
                    type={this.state.status.type}
                    message={this.state.status.message}
                  />
                )}
                <div className="sweet-loading" style={{ marginTop: 20 }}>
                  <Loader loading={loading} />
                </div>
              </div>
              <EntryCount
                entries={entries}
                face={faceEntries}
                apparel={apparelEntries}
                food={foodEntries}
                general={generalEntries}
                colorEntries={colorEntries}
              />
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return <Redirect from="/profile" to="/login" />;
    }
  }
}

export default Profile;
