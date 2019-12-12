import React, { Component } from "react";
import face_home_image from "./images/homePage_face_image.png";
import food_image from "./images/homePage_food_image.jpg";
import apparel_image from "./images/homePage_apparel_image.jpg";
import general_image from "./images/homePage_general_image.jpg";
import color_image from "./images/homePage_color_image.jpg";
import ArticleModel from "./articleModel";
import { modelsContents } from "./constants";
import Introduction from './introduction';
import { Route } from "react-router-dom";
import "./homePage.css";

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Route render={() => <Introduction userId={this.props.userId} props={this.props}/>} />
        <section className="mw8 center">
          <h2 className="athelas ph3 ph0-l">Models</h2>
          <ArticleModel content={modelsContents.face} img={face_home_image} direction={true} />
          <ArticleModel content={modelsContents.food} img={food_image} direction={false}/>
          <ArticleModel content={modelsContents.apparel} img={apparel_image} direction={true}/>
          <ArticleModel content={modelsContents.general} img={general_image} direction={false}/>
          <ArticleModel content={modelsContents.color} img={color_image} direction={true}/>
          <div className="home-btn">
            <input
              onClick={() => this.props.history.push("/models")}
              className="b ph3 pv4 input-reset ba b--black grow pointer f9 dib bg-transparent"
              type="button"
              value="Explore ours models"
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default HomePage;
