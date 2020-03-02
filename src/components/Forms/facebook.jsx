import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class FacebookBtn extends Component {
  render() {
    return (
      <FacebookLogin
        appId=""
        fields="name,email,picture"
        size="metro"
        textButton="  Login"
        icon="fa-facebook"
        cssClass="b ph5 ma3 pv3 input-reset ba b--black grow pointer  dib bg-transparent"
        callback={this.props.responseFacebook}
      />
    );
  }
}

export default FacebookBtn;
