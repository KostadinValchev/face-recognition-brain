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
import { initialState, calculateFaceLocation, getParticlesOptions } from "./components/common/helpers";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/profile";
import Footer from "./components/Footer/footer";
import "./App.css";
import Models from "./components/Models/models";

class App extends Component {
  constructor() {
    super();
    this.state = initialState();
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
    this.setState({ boxes: boxes });
  };

  displayFoodConcepts = data => {
    const food = { concepts: data };
    this.setState({ food });
  };

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleFoodPictureSubmit = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/food", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/foodimage", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState({ loading: false });
              this.setState(
                Object.assign(this.state.user, {
                  entries: count.entries,
                  foodEntries: count.food_entries
                })
              );
            })
            .catch(console.log);
        }
        const food = {
          urlImage: this.state.input,
          concepts: response.outputs[0].data.concepts
        };
        this.setState({ loading: false, food });
      });
  };

  handleGeneralPictureSubmit = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/general", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/generalimage", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState({ loading: false });
              this.setState(
                Object.assign(this.state.user, {
                  entries: count.entries,
                  generalEntries: count.general_entries
                })
              );
            })
            .catch(console.log);
        }
        const general = {
          urlImage: this.state.input,
          concepts: response.outputs[0].data.concepts
        };
        this.setState({ loading: false, general });
      });
  };

  handleApparelPictureSubmit = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/apparel", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/apparelimage", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState({ loading: false });
              this.setState(
                Object.assign(this.state.user, {
                  entries: count.entries,
                  apparelEntries: count.apparel_entries
                })
              );
            })
            .catch(console.log);
        }
        const apparel = {
          urlImage: this.state.input,
          concepts: response.outputs[0].data.concepts
        };
        this.setState({ loading: false, apparel });
      });
  };

  handleColorPictureSubmit = () => {
    this.setState({ loading: true });
    fetch("http://localhost:3000/color", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/colorimage", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState({ loading: false });
              this.setState(
                Object.assign(this.state.user, {
                  entries: count.entries,
                  colorEntries: count.color_entries
                })
              );
            })
            .catch(console.log);
        }
        const colors = {
          urlImage: this.state.input,
          colorsData: response
        };
        this.setState({ loading: false, colors });
      });
  };

  handleFacePictureSubmit = () => {
    this.setState({ loading: true, urlImage: this.state.input });
    fetch("http://localhost:3000/imageurl", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch("http://localhost:3000/image", {
            method: "put",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState({ loading: false });
              this.setState(
                Object.assign(this.state.user, {
                  entries: count.entries,
                  faceEntries: count.face_entries
                })
              );
            })
            .catch(console.log);
        }
        this.displayFaceBox(calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
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
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
