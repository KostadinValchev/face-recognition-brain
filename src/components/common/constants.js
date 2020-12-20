export const servicesUrls = {
  profile: "http://localhost:3000/users/profile/",
  face: "http://localhost:3000/face-recognition/increase-entries",
  food: "http://localhost:3000/food-recognition/food",
  general: "http://localhost:3000/general-recognition/general",
  apparel: "http://localhost:3000/apparel-recognition/apparel",
  color: "http://localhost:3000/color-recognition/color",
};

export const countersUrls = {
  face: "http://localhost:3000/face-recognition/image",
  food: "http://localhost:3000/food-recognition/increase-entries",
  general: "http://localhost:3000/general-recognition/increase-entries",
  apparel: "http://localhost:3000/apparel-recognition/increase-entries",
  color: "http://localhost:3000/color-recognition/increase-entries",
};

export const fetchHeaders = { "Content-type": "application/json" };

export const requestActions = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export const accountActions = {
  register: "register",
  login: "login",
  profile: "profile",
  reset: "reset",
  getFacebookProfile: "getFacebookProfile",
  facebook: "facebook",
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
  loginLabel: "Login",
};

export const modelsLabels = {
  food: "food",
  general: "general",
  apparel: "apparel",
  color: "color",
  face: "face",
};

export const routing = {
  home: "home",
  signout: "signout",
};

export const accountReqMessages = {
  email: "Email is required",
  name: "Name is required",
  password: "Password is required",
  newPassword: "New password is required",
  confirmPassword: "Confirm password is required",
};

export const statusType = {
  success: "success",
  failure: "failure",
};

export const navigateTo = {
  home: "home",
};

export const inputClassName =
  "pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100";

export const errorModelsMessages = {
  invalidUrlAddress: "Please pass valid image url",
};
