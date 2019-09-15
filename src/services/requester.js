export function takeFoodPredictions(inputImage) {
  let food = {};
  fetch("http://localhost:3000/food", {
    method: "post",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      input: inputImage
    })
  })
    .then(response => response.json())
    .then(response => {
      food.urlImage = inputImage;
      food.concepts = response.outputs[0].data.concepts;
    });
  return food;
}
