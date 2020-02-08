import { errorModelsMessages } from "./../components/common/constants";

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
  handleFacePictureSubmit(
    image,
    viaBytes,
    type,
    displayFaceBox,
    handleErrorModels
  ) {
    this.requester
      .post(image, type, viaBytes)
      .then(faceBoxes => {
        if (faceBoxes.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return faceBoxes.json();
      })
      .then(result => {
        displayFaceBox(result);
      })
      .catch(error => {
        handleErrorModels({ type, error });
      });
  }
  handleFoodPictureSubmit(
    pictureUrl,
    viaBytes,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(pictureUrl, type, viaBytes)
      .then(foodBoxes => {
        if (foodBoxes.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return foodBoxes.json();
      })
      .then(result => {
        const food = {
          food: {
            urlImage: !viaBytes && result.outputs[0].input.data.image.url,
            concepts: result.outputs[0].data.concepts
          }
        };
        displayConcepts([food]);
      })
      .catch(error => {
        handleErrorModels({ type, error });
      });
  }
  handleGeneralPictureSubmit(
    image,
    viaBytes,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(image, type, viaBytes)
      .then(general => {
        if (general.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return general.json();
      })
      .then(result => {
        const general = {
          general: {
            urlImage: !viaBytes && result.outputs[0].input.data.image.url,
            concepts: result.outputs[0].data.concepts
          }
        };
        displayConcepts([general]);
      })
      .catch(error => {
        handleErrorModels({ type, error });
      });
  }
  handleApparelPictureSubmit(
    image,
    viaBytes,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(image, type, viaBytes)
      .then(apparel => {
        if (apparel.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return apparel.json();
      })
      .then(result => {
        const apparel = {
          apparel: {
            urlImage: !viaBytes && result.outputs[0].input.data.image.url,
            concepts: result.outputs[0].data.concepts
          }
        };
        displayConcepts([apparel]);
      })
      .catch(error => {
        handleErrorModels({ type, error });
      });
  }
  handleColorsPictureSubmit(
    image,
    viaBytes,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(image, type, viaBytes)
      .then(colors => {
        if (colors.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return colors.json();
      })
      .then(result => {
        const colors = {
          colors: {
            urlImage: !viaBytes && result.imageUrl,
            colorsData: result.colors
          }
        };
        displayConcepts([colors]);
      })
      .catch(error => {
        handleErrorModels({ type, error });
      });
  }
  handleCounterSubmit(userId, pictureUrl, type) {
    this.requester.put(pictureUrl, userId, type);
  }
}

export default Submiter;
