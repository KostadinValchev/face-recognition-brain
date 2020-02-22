import {
  servicesUrls,
  requestActions,
  countersUrls
} from "../components/common/constants";
import { imageBuilder, counterBuilder } from "./fetchBuilder";

class Requester {
  get(userId, type) {
    return fetch(servicesUrls[type] + userId);
  }
  post(image, type, viaBytes) {
    return fetch(
      servicesUrls[type],
      imageBuilder(image, requestActions.post, viaBytes)
    );
  }

  put(userId, type) {
    return fetch(
      countersUrls[type],
      counterBuilder(userId, requestActions.put)
    );
  }
}

export default Requester;
