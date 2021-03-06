import React, { Component } from "react";
import Input from "./input";
import Field from "./field";
import Button from "./button";
import Submiter from "./Submiter";
import { accountActions, statusType } from "../common/constants";
import { statusMessages } from "./FormsConstants";
import {
  validate,
  inputFieldChangeValidations,
  checkIfPasswordIsChanged
} from "../common/validations";
import FacebookBtn from "./facebook";

class Form extends Component {
  constructor(props) {
    super(props);
    this.submiter = new Submiter();
  }
  state = {
    account: {
      email: "",
      password: "",
      newPassword: "",
      confirmPassword: "",
      name: ""
    },
    loading: false,
    wrongAuth: "",
    status: { type: "", message: "" },
    errors: {}
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = inputFieldChangeValidations(this.state.errors, input);
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  onSubmitResetPassword = (e, email, type) => {
    e.preventDefault();
    const errors = validate(accountActions.reset, this.state.account);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.setState({ loading: true });
    const account = { email, ...this.state.account };
    if (account.newPassword !== account.confirmPassword) {
      const status = {
        type: statusType.failure,
        message: statusMessages.newPassNotMatchConfirm
      };
      this.setState({ loading: false, status });
    } else {
      this.submiter.onSubmitResetPassword(
        account,
        this.renderResetPasswordMessage.bind(this),
        type
      );
    }
  };

  renderResetPasswordMessage = data => {
    const { loading, status } = checkIfPasswordIsChanged;
    this.setState({ loading, status });
  };

  handleSigIn = user => {
    if (user.id) {
      this.props.loadUser(user);
      this.setState({ loading: false });
      this.props.onRouteChange("home");
      this.props.history.push("/");
    } else {
      const status = {
        type: statusType.failure,
        message: statusMessages.wrongEmailOrPassword
      };
      this.setState({
        loading: false,
        status
      });
    }
  };

  handleFacebookSignIn = user => {
    this.props.loadUser(user);
    this.setState({ loading: false });
    this.props.onRouteChange("home");
    this.props.history.push("/");
  };

  submit = (e, type) => {
    e.preventDefault();
    const account = this.state.account;
    const errors = validate(type, account);
    this.setState({ errors: errors || {} });
    if (errors) return;
    type === accountActions.login
      ? this.submiter.onSubmitSignIn(account, this.handleSigIn.bind(this), type)
      : this.submiter.onSubmitRegister(
          account,
          this.handleSigIn.bind(this),
          type
        );
    this.setState({ loading: true });
  };

  renderField = (label, value, classes) => {
    return <Field label={label} value={value} classes={classes} />;
  };

  renderInput = (type, name, id, className, label) => {
    const { account, errors } = this.state;
    return (
      <Input
        className={className}
        type={type}
        name={name}
        id={id}
        value={account[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };

  renderButton = (label, action) => {
    const classes = "b ph3 pv2 input-reset ba b--black grow pointer f6 dib";
    const { loading } = this.state;
    return (
      <Button
        value={label}
        className={loading ? classes : classes + " bg-transparent"}
        action={
          action === accountActions.login
            ? e => this.submit(e, accountActions.login)
            : e => this.submit(e, accountActions.register)
        }
        disabled={loading}
      />
    );
  };

  responseFacebook = response => {
    if (response.email) {
      const account = {
        userid: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture
      };
      this.submiter.handleFacebookProfile(
        account,
        this.handleFacebookSignIn.bind(this),
        accountActions.getFacebookProfile
      );
      this.setState({ loading: true });
    }
  };

  renderFacebookBtn = () => {
    return (
      <FacebookBtn
        componentClicked={this.componentClicked}
        responseFacebook={this.responseFacebook}
      />
    );
  };
}

export default Form;
