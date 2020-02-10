import React, { Component, lazy, Suspense } from "react";
// import ArticleModel from "./articleModel";
import Button from './../Forms/button';
import face_home_image from "./images/homePage_face_image.png";
import food_image from "./images/homePage_food_image.jpg";
import apparel_image from "./images/homePage_apparel_image.jpg";
import general_image from "./images/homePage_general_image.jpg";
import color_image from "./images/homePage_color_image.jpg";
import { modelsContents, buttonStyles } from "./constants";
import { Route } from "react-router-dom";

import "./homePage.css";

const ArticleModel = lazy(() => import("./articleModel"));
const Introduction = lazy(() => import("./introduction"));

class HomePage extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Route render={() => <Introduction userId={this.props.userId} props={this.props}/>} />
        <section className="mw8 center">
          <h2 className="athelas ph3 ph0-l">Models</h2>
          <ArticleModel content={modelsContents.face} img={face_home_image} direction={true} />
          <ArticleModel content={modelsContents.food} img={food_image} direction={false}/>
          <ArticleModel content={modelsContents.apparel} img={apparel_image} direction={true}/>
          <ArticleModel content={modelsContents.general} img={general_image} direction={false}/>
          <ArticleModel content={modelsContents.color} img={color_image} direction={true}/>
          <div className="home-btn">
            <Button 
            value="Explore ours models" 
            className={buttonStyles.default}
            action={() => this.props.history.push("/models")}/>
          </div>
        </section>
      </Suspense>
    );
  }
}

export default HomePage;
