import { statusType } from "../common/constants";
import {
  accountActions,
  accountReqMessages,
  email,
  password,
  _name,
  newPassword,
  confirmPassword
} from "./constants";

var pattern = RegExp(
  "[" + "{}[]-/\\()*+?.%$|".replace(RegExp(".", "g"), "\\$&") + "]",
  "g"
);

export function validate(type, account) {
  const errors = {};
  if (type === accountActions.login || type === accountActions.register) {
    if (account.email.trim() === "")
      errors.email = accountReqMessages.emailRequired;
    if (type === accountActions.register) {
      if (account.name.trim() === "")
        errors.name = accountReqMessages.nameRequired;
    }
  }
  if (account.password.trim() === "")
    errors.password = accountReqMessages.password;
  if (type === accountActions.reset) {
    if (account.newPassword.trim() === "")
      errors.newPassword = accountReqMessages.newPassword;
    if (account.confirmPassword.trim() === "")
      errors.confirmPassword = accountReqMessages.confirmPassword;
  }
  return Object.keys(errors).length === 0 ? null : errors;
}

export function validateProperty({ name, value }) {
  if (name === email) {
    if (value.trim() === "") return accountReqMessages.email;
    //...
  }
  if (name === password) {
    if (value.trim() === "") return accountReqMessages.password;
  }
  if (name === _name) {
    if (value.trim() === "") return accountReqMessages.name;
  }
  if (name === newPassword) {
    if (value.trim() === "") return accountReqMessages.newPassword;
  }
  if (name === confirmPassword) return accountReqMessages.confirmPassword;
}

export function inputFieldChangeValidations(initErrors, input) {
  let errors = initErrors;
  const errorMessage = validateProperty(input);
  if (errorMessage) errors[input.name] = errorMessage;
  else delete errors[input.name];
  return errors;
}

export function checkConfirmPassword(account) {
  if (account.newPassword !== account.confirmPassword) {
    return {
      match: false,
      data: {
        type: statusType.failure,
        message: "New password does not match Confirm password"
      }
    };
  } else {
    return { match: true };
  }
}

export function checkIfPasswordIsChanged(data) {
  const status = {
    type: "",
    message: ""
  };
  if (data.status === 200) {
    status.type = statusType.success;
    status.message = "Password successfully changed";
  } else {
    status.type = statusType.failure;
    status.message = "Wrong or invalid password";
  }
  return { loading: false, status };
}

export function sanitize_for_regex(val) {
  return val.replace(pattern, "\\$&");
}
