import FormRequester from "./FormRequester";
import { signInUrl, registerUrl, resetPasswordUrl } from "./FormsConstants";

class Submiter {
  constructor() {
    this.formRequester = new FormRequester();
  }
  submite() {}
  onSubmitRegister(account, callBack, type) {
    this.formRequester
      .post(registerUrl, account, type)
      .then(response => response.json())
      .then(callBack)
      .catch(error => {
        console.log(error);
      });
  }

  onSubmitSignIn(account, callBack, type) {
    this.formRequester
      .post(signInUrl, account, type)
      .then(response => response.json())
      .then(callBack)
      .catch(error => {
        console.log(error);
      });
  }

  onSubmitResetPassword(account, callBack, type) {
    this.formRequester
      .put(resetPasswordUrl, account, type)
      .then(callBack)
      .catch(error => {
        console.log(error);
      });
  }
}

export default Submiter;
