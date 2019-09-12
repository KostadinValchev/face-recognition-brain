var pattern = RegExp("[" + "{}[]-/\\()*+?.%$|".replace(RegExp(".", "g"), "\\$&") + "]", "g");

export function validate(type, account) {
  const errors = {};
  if (type === "login" || type === "register") {
    if (account.email.trim() === "") errors.email = "Email is required";
    if (type === "register") {
      if (account.name.trim() === "") errors.name = "Name is required";
    }
  }
  if (account.password.trim() === "") errors.password = "Password is required";
  if (type === "reset") {
    if (account.newPassword.trim() === "")
      errors.newPassword = "New password is required";
    if (account.confirmPassword.trim() === "")
      errors.confirmPassword = "Confirm password password is required";
  }
  return Object.keys(errors).length === 0 ? null : errors;
}

export function validateProperty({ name, value }) {
  if (name === "email") {
    if (value.trim() === "") return "Email is required";
    //...
  }
  if (name === "password") {
    if (value.trim() === "") return "Password is required";
  }
  if (name === "name") {
    if (value.trim() === "") return "Name is required";
  }
  if (name === "newPassword") {
    if (value.trim() === "") return "New password is required";
  }
  if (name === "confirmPassword") return "Confirm password is required";
}

export function sanitize_for_regex(val) {
    return val.replace(pattern, "\\$&");
}