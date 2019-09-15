import { fetchHelper } from "./fetchBuilder";
import { requestActions } from "../common/constants";

class FormRequester {
  get() {}
  post(url, account, type) {
    return fetch(url, fetchHelper(requestActions.post, type, account));
  }
  put(url, account, type) {
    return fetch(url, fetchHelper(requestActions.put, type, account));
  }
}

export default FormRequester;
