import { accountActions, fetchHeaders } from "../common/constants";

export function fetchHelper(action, type, account) {
  let data = { email: account.email };
  if (type === accountActions.facebook) {
    data.userid = account.userid;
    data.name = account.name;
  } else {
    data.password = account.password;
    if (type === accountActions.register) data.name = account.name;
    if (type === accountActions.reset) data.newPassword = account.newPassword;
  }
  if (type === accountActions.getFacebookProfile) {
    return {
      method: action,
      headers: fetchHeaders
    };
  } else {

    return {
      method: action,
      headers: fetchHeaders,
      body: JSON.stringify(data)
    };
  }
}
