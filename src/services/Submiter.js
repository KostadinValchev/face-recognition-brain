import { errorModelsMessages } from './../components/common/constants';

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
  handleFacePictureSubmit(pictureUrl, type, displayFaceBox, handleErrorModels) {
    this.requester
      .post(pictureUrl, type)
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
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(pictureUrl, type)
      .then(foodBoxes => {
        if (foodBoxes.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return foodBoxes.json();
      })
      .then(result => {
        const food = {
          food: {
            urlImage: result.outputs[0].input.data.image.url,
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
    pictureUrl,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(pictureUrl, type)
      .then(general => {
        if (general.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return general.json();
      })
      .then(result => {
        const general = {
          general: {
            urlImage: result.outputs[0].input.data.image.url,
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
    pictureUrl,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(pictureUrl, type)
      .then(apparel => {
        if (apparel.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return apparel.json();
      })
      .then(result => {
        const apparel = {
          apparel: {
            urlImage: result.outputs[0].input.data.image.url,
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
    pictureUrl,
    type,
    displayConcepts,
    handleErrorModels
  ) {
    this.requester
      .post(pictureUrl, type)
      .then(colors => {
        if (colors.status === 400)
          throw new Error(errorModelsMessages.invalidUrlAddress);
        else return colors.json();
      })
      .then(result => {
        const colors = {
          colors: {
            urlImage: result.imageUrl,
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
