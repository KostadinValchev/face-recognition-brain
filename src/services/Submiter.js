import { errorModelsMessages } from "./../components/common/constants";
import { responseObjectProcessing } from "./../components/common/helpers";

class Submiter {
  constructor(Requester) {
    this.requester = Requester;
  }

  handleIncrementCounters(userId, type, incrementCounters) {
    this.requester
      .put(userId, type)
      .then(counters => counters.json())
      .then(result => {
        incrementCounters(result);
      });
  }

  handlePictureSubmit(
    image,
    viaBytes,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(image, type, viaBytes)
      .then(res => {
        if (res.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return res.json();
      })
      .then(result => {
        const model = responseObjectProcessing(result, type, viaBytes);
        type === "face"
          ? displayConcepts(result, image)
          : displayConcepts([{ ...model }]);
      })
      .catch(error => {
        handleErrorModels({ type, error });
      });
  }

  handleProfile(userId) {
    
  }

  handleCounterSubmit(userId, pictureUrl, type) {
    this.requester.put(pictureUrl, userId, type);
  }

}

export default Submiter;
