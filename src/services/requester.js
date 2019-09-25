import { servicesUrls, requestActions, countersUrls } from "../components/common/constants";
import { imageBuilder, counterBuilder } from "./fetchBuilder";

class Requester {
  post(pictureUrl, type) {
    return fetch(
      servicesUrls[type],
      imageBuilder(pictureUrl, requestActions.post)
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
