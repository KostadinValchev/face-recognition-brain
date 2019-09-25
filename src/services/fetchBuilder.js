import { fetchHeaders } from "../components/common/constants";

export function imageBuilder(pictureUrl, action) {
  return {
    method: action,
    headers: fetchHeaders,
    body: JSON.stringify({
      input: pictureUrl
    })
  };
}

export function counterBuilder(userId, action) {
  return {
    method: action,
    headers: fetchHeaders,
    body: JSON.stringify({
      id: userId
    })
  };
}
