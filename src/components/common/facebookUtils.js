export function logoutFacebookUser() {
  window.FB.getLoginStatus(function(response) {
    response.status === "connected" && window.FB.logout();
  });
}
