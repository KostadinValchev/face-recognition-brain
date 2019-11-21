import React, { Component } from "react";
import HomePage from "./components/Home/homePage";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/ModelsRecognition/faceRecognition";
import FoodRecognition from "./components/ModelsRecognition/foodRecognition";
import ApparelRecognition from "./components/ModelsRecognition/apparelRecognition";
import GeneralRecognition from "./components/ModelsRecognition/generalRecognition";
import ColorRecognition from "./components/ModelsRecognition/colorRecognition";
import RegisterForm from "./components/Forms/registerForm";
import LoginForm from "./components/Forms/loginForm";
import {
  initialState,
  calculateFaceLocation,
  getParticlesOptions
} from "./components/common/helpers";
import { Route, Switch, Redirect } from "react-router-dom";
import Profile from "./components/Profile/profile";
import Footer from "./components/Footer/footer";
import Models from "./components/Models/models";
import NotFound from "./components/NotFound/notFound";
import { modelsLabels, routing } from "./components/common/constants";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initialState();
    this.submiter = props.submiter;
  }

  loadUser = data => {
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

  displayFaceBox = boxes => {
    const calculatedBoxes = calculateFaceLocation(boxes);
    this.setState({ loading: false, boxes: calculatedBoxes });
  };

  displayConcepts = concepts => {
    this.setState({ loading: false, ...concepts[0] });
  };

  incrementCounters = counters => {
    this.setState(Object.assign(this.state.user, counters));
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleErrorModels = ({ type, error }) => {
    let data = { ...this.state[type] };
    data.error = error.message;
    this.setState({ loading: false, [type]: { ...data } });
  };

  handleFoodPictureSubmit = () => {
    this.setState({ loading: true });
    this.submiter.handleFoodPictureSubmit(
      this.state.input,
      modelsLabels.food,
      this.displayConcepts.bind(this),
      this.handleErrorModels.bind(this)
    );
    this.state.input !== "" &&
      this.submiter.handleIncrementCounters(
        this.state.user.id,
        modelsLabels.food,
        this.incrementCounters.bind(this)
      );
  };

  handleGeneralPictureSubmit = () => {
    this.setState({ loading: true });
    this.submiter.handleGeneralPictureSubmit(
      this.state.input,
      modelsLabels.general,
      this.displayConcepts.bind(this),
      this.handleErrorModels.bind(this)
    );
    this.state.input !== "" &&
      this.submiter.handleIncrementCounters(
        this.state.user.id,
        modelsLabels.general,
        this.incrementCounters.bind(this)
      );
  };

  handleApparelPictureSubmit = () => {
    this.setState({ loading: true });
    this.submiter.handleApparelPictureSubmit(
      this.state.input,
      modelsLabels.apparel,
      this.displayConcepts.bind(this),
      this.handleErrorModels.bind(this)
    );
    this.state.input !== "" &&
      this.submiter.handleIncrementCounters(
        this.state.user.id,
        modelsLabels.apparel,
        this.incrementCounters.bind(this)
      );
  };

  handleColorPictureSubmit = () => {
    this.setState({ loading: true });
    this.submiter.handleColorsPictureSubmit(
      this.state.input,
      modelsLabels.colors,
      this.displayConcepts.bind(this),
      this.handleErrorModels.bind(this)
    );
    this.state.input !== "" &&
      this.submiter.handleIncrementCounters(
        this.state.user.id,
        modelsLabels.colors,
        this.incrementCounters.bind(this)
      );
  };

  handleFacePictureSubmit = () => {
    this.setState({ loading: true, urlImage: this.state.input });
    this.submiter.handleFacePictureSubmit(
      this.state.input,
      modelsLabels.face,
      this.displayFaceBox.bind(this),
      this.handleErrorModels.bind(this)
    );
    this.state.input !== "" &&
      this.submiter.handleIncrementCounters(
        this.state.user.id,
        modelsLabels.face,
        this.incrementCounters.bind(this)
      );
  };

  onRouteChange = route => {
    if (route === routing.signout) {
      this.setState(initialState);
    } else if (route === routing.home) {
      this.setState({ isSignIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { isSignIn, boxes, urlImage, loading, titles } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={getParticlesOptions()} />
        <Navigation isSignedIn={isSignIn} onRouteChange={this.onRouteChange} />
        <Switch>
          <Route
            path="/face"
            render={props => (
              <FaceRecognition
                name={this.state.user.name}
                title={titles.face}
                entries={this.state.user.entries}
                boxes={boxes}
                urlImage={urlImage}
                errors={this.state.face.error}
                loading={loading}
                onInputChange={this.onInputChange}
                onPictureSubmit={this.handleFacePictureSubmit}
                {...props}
              />
            )}
          />
          <Route
            path="/food"
            render={props => (
              <FoodRecognition
                userId={this.state.user.id}
                title={titles.food}
                urlImage={this.state.food.urlImage}
                concepts={this.state.food.concepts}
                errors={this.state.food.error}
                loading={loading}
                onInputChange={this.onInputChange}
                onFoodPictureSubmit={this.handleFoodPictureSubmit}
                {...props}
              />
            )}
          />
          <Route
            path="/apparel"
            render={props => (
              <ApparelRecognition
                userId={this.state.user.id}
                title={titles.apparel}
                urlImage={this.state.apparel.urlImage}
                concepts={this.state.apparel.concepts}
                errors={this.state.apparel.error}
                loading={loading}
                onInputChange={this.onInputChange}
                onApparelPictureSubmit={this.handleApparelPictureSubmit}
                {...props}
              />
            )}
          />
          <Route
            path="/general"
            render={props => (
              <GeneralRecognition
                userId={this.state.user.id}
                title={titles.general}
                urlImage={this.state.general.urlImage}
                concepts={this.state.general.concepts}
                errors={this.state.general.error}
                loading={loading}
                onInputChange={this.onInputChange}
                onApparelPictureSubmit={this.handleGeneralPictureSubmit}
                {...props}
              />
            )}
          />
          <Route
            path="/color"
            render={props => (
              <ColorRecognition
                userId={this.state.user.id}
                title={titles.color}
                urlImage={this.state.colors.urlImage}
                colors={this.state.colors.colorsData}
                errors={this.state.colors.error}
                loading={loading}
                onInputChange={this.onInputChange}
                onColorPictureSubmit={this.handleColorPictureSubmit}
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
      </div>
    );
  }
}

export default App;
