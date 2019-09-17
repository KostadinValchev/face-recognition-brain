export const signInUrl = "http://localhost:3000/signin";
export const registerUrl = "http://localhost:3000/register";
export const resetPasswordUrl = "http://localhost:3000/resetpass";

export const requestActions = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete"
};

export const accountData = {
  email: "email",
  password: "password",
  name: "name",
  newPassword: "newPassword",
  confirmPassword: "confirmPassword",
  emailLabel: "Email",
  passwordLabel: "Password",
  nameLebal: "Name",
  oldPasswordLabel: "Old password",
  newPasswordLabel: "New password",
  confirmPasswordLabel: "Confirm password",
  registerLabel: "Register",
  loginLabel: "Login"
};
export const email = "email";
export const password = "password";
export const _name = "name";
export const newPassword = "newPassword";
export const confirmPassword = "confirmPassword";

export const accountReqMessages = {
  email: "Email is required",
  name: "Name is required",
  password: "Password is required",
  newPassword: "New password is required",
  confirmPassword: "Confirm password is required"
};

export const fetchHeaders = { "Content-type": "application/json" };

export const accountActions = {
  register: "register",
  login: "login",
  profile: "profile",
  reset: "reset"
};

export const statusType = {
  success: "success",
  failure: "failure"
};

export const navigateTo = {
  home: "home"
};

export const buttonClassName =
  "b ph3 pv2 input-reset ba b--black grow pointer f6 dib btn";

export const inputClassName =
  "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100";
