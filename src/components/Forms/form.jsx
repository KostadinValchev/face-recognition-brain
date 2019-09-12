import React, { Component } from "react";
import Input from "./input";
import Field from "./field";
import { validate, validateProperty } from "../common/validations";

class Form extends Component {
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
    let errors = { ...this.state.errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  onSubmitRegister = e => {
    e.preventDefault();

    const errors = validate("register", this.state.account);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.setState({ loading: true });
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.account.email,
        password: this.state.account.password,
        name: this.state.account.name
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.setState({ loading: false });
          // Delete after install routing service
          this.props.onRouteChange("home");
          this.props.history.push("/");
        }
      });
  };

  onSubmitSignIn = e => {
    e.preventDefault();
    const errors = validate("login", this.state.account);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.setState({ loading: true });
    fetch("http://localhost:3000/signin", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: this.state.account.email,
        password: this.state.account.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.setState({ loading: false });
          this.props.onRouteChange("home");
          this.props.history.push("/");
        } else {
          const status = {
            type: "failure",
            message: "Wrong email or password"
          };
          this.setState({
            loading: false,
            status
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  onSubmitResetPassword = email => {
    const errors = validate("reset", this.state.account);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.setState({ loading: true });
    const { password, newPassword, confirmPassword } = this.state.account;
    if (newPassword !== confirmPassword) {
      const status = {
        type: "failure",
        message: "New password does not match Confirm password"
      };
      this.setState({ loading: false, status });
    } else {
      fetch("http://localhost:3000/resetpass", {
        method: "put",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          newPassword: newPassword
        })
      })
        .then(response => {
          if (response.status === 200) {
            const status = {
              type: "success",
              message: "Password successfully changed"
            };
            this.setState({ loading: false, status });
          } else {
            const status = {
              type: "failure",
              message: "Wrong or invalid password"
            };
            this.setState({ loading: false, status });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
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
      <input
        onClick={
          action === "login" ? this.onSubmitSignIn : this.onSubmitRegister
        }
        className={loading ? classes : classes + " bg-transparent"}
        type="button"
        value={label}
        disabled={loading}
      />
    );
  };
}

export default Form;
