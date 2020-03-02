import FormRequester from "./FormRequester";
import {
  signInUrl,
  registerUrl,
  resetPasswordUrl,
  getFacebookProfile,
  facebookRegisterUrl,
  facebookSignInUrl
} from "./FormsConstants";
import { accountActions } from "./../common/constants";

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

  // handleFacebookProfile - OK
  // handleFacebookRegister
  // handleFacebookSignIn

  handleFacebookRegister(account, callBack, type) {
    this.formRequester
      .post(facebookRegisterUrl, account, type)
      .then(res => res.json())
      .then(callBack);
  }

  handleFacebookSignIn(account, callBack, type) {
    this.formRequester.post(facebookSignInUrl, account, type)
      .then(res => res.json())
      .then(callBack);
  }

  handleFacebookProfile(account, callBack, type) {
    this.formRequester
      .get(getFacebookProfile + account.userid, account, type)
      .then(res => {
        if (res.status === 200) {
          this.handleFacebookSignIn(account, callBack, accountActions.facebook);
        } else if (res.status === 204) {
          this.handleFacebookRegister(
            account,
            callBack,
            accountActions.facebook
          );
        }
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
