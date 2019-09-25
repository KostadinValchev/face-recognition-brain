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
      .then((result) => {
        displayFaceBox(result[0]);
        incrementCounters(result[1]);
      });
  }
  handleFoodPictureSubmit(userId, pictureUrl, type) {}
  handleGeneralPictureSubmit(userId, pictureUrl, type) {}
  handleApparelPictureSubmit(userId, pictureUrl, type) {}
  handleColorPictureSubmit(userId, pictureUrl, type) {}
  handleCounterSubmit(userId, pictureUrl, type) {
    this.requester.put(pictureUrl, userId, type);
  }
}

export default Submiter;
