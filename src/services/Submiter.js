import Requester from "./Requester";
class Submiter {
  constructor() {
    this.requester = new Requester();
  }
  handleFacePictureSubmit(
    userId,
    pictureUrl,
    type,
    displayFaceBox,
    incrementCounters
  ) {
    Promise.all([
      this.requester.post(pictureUrl, type),
      this.requester.put(userId, type)
    ])
      .then(([faceBoxes, counters]) => {
        return Promise.all([faceBoxes.json(), counters.json()]);
      })
      .then(result => {
        displayFaceBox(result[0]);
        incrementCounters(result[1]);
      });
  }
  handleFoodPictureSubmit(
    userId,
    pictureUrl,
    type,
    displayConcepts,
    incrementCounters
  ) {
    Promise.all([
      this.requester.post(pictureUrl, type),
      this.requester.put(userId, type)
    ])
      .then(([foodBoxes, counters]) => {
        return Promise.all([foodBoxes.json(), counters.json()]);
      })
      .then(result => {
        const food = {
          food: {
            urlImage: result[0].outputs[0].input.data.image.url,
            concepts: result[0].outputs[0].data.concepts
          }
        };
        displayConcepts([food]);
        incrementCounters(result[1]);
      });
  }
  handleGeneralPictureSubmit(
    userId,
    pictureUrl,
    type,
    displayConcepts,
    incrementCounters
  ) {
    Promise.all([
      this.requester.post(pictureUrl, type),
      this.requester.put(userId, type)
    ])
      .then(([general, counters]) => {
        return Promise.all([general.json(), counters.json()]);
      })
      .then(result => {
        const general = {
          general: {
            urlImage: result[0].outputs[0].input.data.image.url,
            concepts: result[0].outputs[0].data.concepts
          }
        };
        displayConcepts([general]);
        incrementCounters(result[1]);
      });
  }
  handleApparelPictureSubmit(
    userId,
    pictureUrl,
    type,
    displayConcepts,
    incrementCounters
  ) {
    Promise.all([
      this.requester.post(pictureUrl, type),
      this.requester.put(userId, type)
    ])
      .then(([apparel, counters]) => {
        return Promise.all([apparel.json(), counters.json()]);
      })
      .then(result => {
        const apparel = {
          apparel: {
            urlImage: result[0].outputs[0].input.data.image.url,
            concepts: result[0].outputs[0].data.concepts
          }
        };
        displayConcepts([apparel]);
        incrementCounters(result[1]);
      });
  }
  handleColorPictureSubmit(userId, pictureUrl, type) {}
  handleCounterSubmit(userId, pictureUrl, type) {
    this.requester.put(pictureUrl, userId, type);
  }
}

export default Submiter;
