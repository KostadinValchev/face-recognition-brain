import { fetchHeaders } from "../components/common/constants";

export function imageBuilder(image, action, viaBytes) {
  return {
    method: action,
    headers: fetchHeaders,
    body: JSON.stringify({
      input: image,
      viaBytes: viaBytes
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
