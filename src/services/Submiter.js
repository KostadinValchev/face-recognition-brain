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
  handleFacePictureSubmit(pictureUrl, type, displayFaceBox) {
    this.requester
      .post(pictureUrl, type)
      .then(faceBoxes => faceBoxes.json())
      .then(result => {
        displayFaceBox(result);
      });
  }
  handleFoodPictureSubmit(pictureUrl, type, displayConcepts) {
    this.requester
      .post(pictureUrl, type)
      .then(foodBoxes => foodBoxes.json())
      .then(result => {
        const food = {
          food: {
            urlImage: result.outputs[0].input.data.image.url,
            concepts: result.outputs[0].data.concepts
          }
        };
        displayConcepts([food]);
      });
  }
  handleGeneralPictureSubmit(pictureUrl, type, displayConcepts) {
    this.requester
      .post(pictureUrl, type)
      .then(general => general.json())
      .then(result => {
        const general = {
          general: {
            urlImage: result.outputs[0].input.data.image.url,
            concepts: result.outputs[0].data.concepts
          }
        };
        displayConcepts([general]);
      });
  }
  handleApparelPictureSubmit(pictureUrl, type, displayConcepts) {
    this.requester
      .post(pictureUrl, type)
      .then(apparel => apparel.json())
      .then(result => {
        const apparel = {
          apparel: {
            urlImage: result.outputs[0].input.data.image.url,
            concepts: result.outputs[0].data.concepts
          }
        };
        displayConcepts([apparel]);
      });
  }
  handleColorPictureSubmit(pictureUrl, type, displayConcepts) {
    this.requester
      .post(pictureUrl, type)
      .then(colors => colors.json())
      .then(result => {
        const colors = {
          colors: {
            urlImage: result.imageUrl,
            colorsData: result.colors
          }
        };
        displayConcepts([colors]);
      });
  }
  handleCounterSubmit(userId, pictureUrl, type) {
    this.requester.put(pictureUrl, userId, type);
  }
}

export default Submiter;
