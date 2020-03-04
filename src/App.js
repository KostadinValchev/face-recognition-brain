import React, { Component, lazy, Suspense } from "react";
import HomePage from "./components/Home/homePage";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import ModelRecognition from "./components/ModelRecognition/modelRecognition";
import RegisterForm from "./components/Forms/registerForm";
import LoginForm from "./components/Forms/loginForm";
import {
  initialState,
  calculateFaceLocation,
  getParticlesOptions
} from "./components/common/helpers";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from "./components/Profile/profile";
import Models from "./components/Models/models";
import NotFound from "./components/NotFound/notFound";
import { toBase64 } from "./components/common/fileConverter";
import { routing } from "./components/common/constants";
import { logoutFacebookUser } from "./components/common/facebookUtils";
import "./App.css";
const Footer = lazy(() => import("./components/Footer/footer"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.submiter = props.submiter;
    this.cookies = props.cookies;
  }

  componentWillMount() {
    
    let user = this.cookies.get("user");
    if (user) {
      this.submiter.takeProfileData(user, "profile", this.loadUser.bind(this));
      this.onRouteChange("home");
    }
  }

  loadUser = data => {
    let user = this.cookies.get("user");
    if (!user) {
      this.cookies.set("user", JSON.stringify(data.id), {
        expires: new Date(Date.now() + 2592000)
      });
    }

    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        faceEntries: data.face_entries,
        apparelEntries: data.apparel_entries,
        foodEntries: data.food_entries,
        generalEntries: data.general_entries,
        colorEntries: data.color_entries,
        joined: data.joined
      }
    });
  };

  displayFaceBox = (boxes, image) => {
    const calculatedBoxes = calculateFaceLocation(boxes);
    const face = { boxes: calculatedBoxes, image: image };
    this.setState({ loading: false, face });
  };

  displayConcepts = concepts => {
    this.setState({ loading: false, ...concepts[0] });
  };

  incrementCounters = counters => {
    this.setState(Object.assign(this.state.user, counters));
  };

  onInputChange = event => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  handleErrorModels = ({ type, error }) => {
    let data = { ...this.state[type] };
    data.error = error.message;
    this.setState({ loading: false, [type]: { ...data } });
  };

  handlePictureSubmit = event => {
    const modelType = event.props.match.path.substring(1);
    const { input, viaBytes, base64 } = this.state;
    const image = viaBytes ? base64 : input;
    this.setState({
      loading: true,
      input: "",
      urlImage: image,
      viaBytes: false
    });
    this.submiter.handlePictureSubmit(
      image,
      viaBytes,
      modelType,
      modelType === "face"
        ? this.displayFaceBox.bind(this)
        : this.displayConcepts.bind(this),
      this.handleErrorModels.bind(this)
    );
    image !== "" &&
      this.submiter.handleIncrementCounters(
        this.state.user.id,
        modelType,
        this.incrementCounters.bind(this)
      );
  };

  uploadFileHandler = event => {
    event.preventDefault();
    toBase64(event.target.files[0])
      .then(result =>
        this.setState({
          viaBytes: true,
          base64: result
        })
      )
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === routing.signout) {
      this.setState(initialState);
      window.FB && logoutFacebookUser();
      this.cookies.remove("user");
    } else if (route === routing.home) {
      this.setState({ isSignIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignIn, urlImage, loading, titles } = this.state;
    return (
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Particles className="particles" params={getParticlesOptions()} />
          <Navigation
            isSignedIn={isSignIn}
            onRouteChange={this.onRouteChange}
          />
          <Switch>
            <Route
              path="/face"
              render={props => (
                <ModelRecognition
                  name={this.state.user.name}
                  userId={this.state.user.id}
                  title={titles.face}
                  entries={this.state.user.entries}
                  boxes={this.state.face.boxes}
                  image={urlImage ? urlImage : this.state.base64}
                  isFaceConcept={true}
                  errors={this.state.face.error}
                  loading={loading}
                  onInputChange={this.onInputChange}
                  onUploadFileHandler={this.uploadFileHandler}
                  onPictureSubmit={this.handlePictureSubmit}
                  {...props}
                />
              )}
            />
            <Route
              path="/food"
              render={props => (
                <ModelRecognition
                  userId={this.state.user.id}
                  title={titles.food}
                  image={
                    this.state.food.urlImage
                      ? this.state.food.urlImage
                      : this.state.base64
                  }
                  concepts={this.state.food.concepts}
                  errors={this.state.food.error}
                  loading={loading}
                  onInputChange={this.onInputChange}
                  onUploadFileHandler={this.uploadFileHandler}
                  onPictureSubmit={this.handlePictureSubmit}
                  {...props}
                />
              )}
            />
            <Route
              path="/apparel"
              render={props => (
                <ModelRecognition
                  userId={this.state.user.id}
                  title={titles.apparel}
                  image={
                    this.state.apparel.urlImage
                      ? this.state.apparel.urlImage
                      : this.state.base64
                  }
                  concepts={this.state.apparel.concepts}
                  errors={this.state.apparel.error}
                  loading={loading}
                  onInputChange={this.onInputChange}
                  onUploadFileHandler={this.uploadFileHandler}
                  onPictureSubmit={this.handlePictureSubmit}
                  {...props}
                />
              )}
            />
            <Route
              path="/general"
              render={props => (
                <ModelRecognition
                  userId={this.state.user.id}
                  title={titles.general}
                  image={
                    this.state.general.urlImage
                      ? this.state.general.urlImage
                      : this.state.base64
                  }
                  concepts={this.state.general.concepts}
                  errors={this.state.general.error}
                  loading={loading}
                  onInputChange={this.onInputChange}
                  onUploadFileHandler={this.uploadFileHandler}
                  onPictureSubmit={this.handlePictureSubmit}
                  {...props}
                />
              )}
            />
            <Route
              path="/color"
              render={props => (
                <ModelRecognition
                  userId={this.state.user.id}
                  title={titles.color}
                  image={
                    this.state.color.urlImage
                      ? this.state.color.urlImage
                      : this.state.base64
                  }
                  isColorConcept={true}
                  concepts={this.state.color.concepts}
                  errors={this.state.color.error}
                  loading={loading}
                  onInputChange={this.onInputChange}
                  onUploadFileHandler={this.uploadFileHandler}
                  onPictureSubmit={this.handlePictureSubmit}
                  {...props}
                />
              )}
            />
            <Route
              path="/profile"
              render={props => (
                <Profile
                  userId={this.state.user.id}
                  user={this.state.user}
                  {...props}
                />
              )}
            />
            <Route path="/models" component={Models} />
            <Route
              path="/register"
              render={props => (
                <RegisterForm
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}
                  {...props}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Route
              path="/login"
              render={props => (
                <LoginForm
                  loadUser={this.loadUser}
                  onRouteChange={this.onRouteChange}
                  {...props}
                />
              )}
            />
            <Route
              path="/"
              exact
              render={props => (
                <HomePage userId={this.state.user.id} {...props} />
              )}
            />
            <Redirect to="/not-found" />
          </Switch>
          <Footer />
        </Suspense>
      </div>
    );
  }
}

export default App;
