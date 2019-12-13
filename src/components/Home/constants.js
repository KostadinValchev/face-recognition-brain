export const modelsContents = {
  face: `The ‘Face Detection’ model returns probability scores on the
    likelihood that the image contains human faces and coordinate
    locations of where those faces appear with a bounding box.`,
  food: `The ‘Food’ model recognizes more than 1,000 food items in
    images down to the ingredient level. This model is great for
    building a health and wellness related app.`,
  apparel: `The ‘Apparel’ model recognizes more than 100 fashion-related
    concepts including clothing and accessories.`,
  general: `The ‘General’ model recognizes over 11,000 different concepts
    including objects, themes, moods. This model is a great
    all-purpose solution for most visual recognition needs.`,
  color: `The ‘Color’ model returns density values for dominant colors
    present in images. Color predictions are returned in hex
    format and also mapped to their closest W3C counterparts.`
};

export const headers = {
  main: "Smart brain is application for recognition models",
  second: `The Application is built around a simple idea. You send inputs
  (an image url) to the service and it returns predictions`
};

export const buttonStyles = {
  default:
    "b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-transparent"
};
