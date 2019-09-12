const initState = {
  input: "",
  urlImage: "",
  boxes: [],
  route: "signin",
  isSignIn: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    faceEntries: 0,
    apparelEntries: 0,
    foodEntries: 0,
    generalEntries: 0,
    colorEntries: 0,
    joined: ""
  },
  food: { urlImage: "", concepts: [] },
  apparel: { urlImage: "", concepts: [] },
  general: { urlImage: "", concepts: [] },
  colors: { urlImage: "", colorsData: [] },
  titles: {
    face: "Detect the presence and location of human faces with a bounding box",
    food: "Recognize food items and dishes, down to the ingredient level",
    apparel: "Recognize clothing, accessories, and other fashion-related items",
    general:
      "Most comprehensive model with concepts, objects, scenes, and more",
    color:
      "Identify the dominant colors present in your media in hex or W3C form"
  },
  loading: false
};

const modelsTitle = `A model is a processing block that converts inputs (e.g. images)
                to predictions (e.g. concepts, bounding boxes, etc). When you
                run an input through a model, it will return the predictions
                that the model sees in the input. Each model is trained to
                recognize a unique set of outputs, such as concepts, faces, and
                colors. For example, if you run your input through the ‘food’
                model, it will return concepts that the ‘food’ model knows
                about, such as specific dish names. If you run the same input
                through the ‘color’ model, it will return predictions about the
                dominant colors in your image.`;

const particlesOptions = {
  particles: {
    number: {
      value: 15,
      density: {
        enable: true,
        value_area: 200
      }
    },
    move: {
      speed: 2
    }
  }
};

export function initialState() {
  return initState;
}

export function getModelsTitle() {
  return modelsTitle;
}

export function getParticlesOptions() {
  return particlesOptions;
}

export function calculateFaceLocation(data) {
  const clarifaiFaces = data.outputs[0].data.regions;
  let faceBoxes = [];
  const image = document.getElementById("inputimage");
  const width = Number(image.width);
  const height = Number(image.height);
  for (let i = 0; i < clarifaiFaces.length; i++) {
    const curentBox = clarifaiFaces[i].region_info.bounding_box;
    const result = {
      leftCol: curentBox.left_col * width,
      topRow: curentBox.top_row * height,
      rightCol: width - curentBox.right_col * width,
      bottomRow: height - curentBox.bottom_row * height
    };
    faceBoxes.push(result);
  }
  return faceBoxes;
}
