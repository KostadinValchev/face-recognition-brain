import { fetchHeaders } from "./FormsConstants";
import { accountActions } from "../common/constants";

export function fetchHelper(action, type, account) {
  const data = {
    email: account.email,
    password: account.password
  };
  if (type === accountActions.register) data.name = account.name;
  if (type === accountActions.reset) data.newPassword = account.newPassword;
  return {
    method: action,
    headers: fetchHeaders,
    body: JSON.stringify(data)
  };
}
