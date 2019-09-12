import React, { Component } from "react";
import face_home_image from "./homePage_face_image.png";
import face_food_image from "./homePage_food_image.jpg";
import face_apparel_image from "./homePage_apparel_image.jpg";
import face_general_image from "./homePage_general_image.jpg";
import face_color_image from "./homePage_color_image.jpg";
import "./homePage.css";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <article className="br3 ba dark-gray b--black-10  w-100  w-80-l  shadow-3 center homeart">
          <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
            Smart brain is application for recognition models
          </h1>
          <main className="pa4 black-80 homemain">
            <div className="measure">
              <h2 className="fw1 f3 white-80 mt3 mb4">
                The Application is built around a simple idea. You send inputs
                (an image url) to the service and it returns predictions
              </h2>
              {!this.props.userId && (
                <div className="homebtn-container">
                  <div className="home-btn">
                    <input
                      onClick={() => this.props.history.push("/login")}
                      className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-transparent"
                      type="button"
                      value="Sign In"
                    />
                  </div>
                  <div className="home-btn">
                    <input
                      onClick={() => this.props.history.push("/register")}
                      className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib bg-transparent"
                      type="button"
                      value="Register"
                    />
                  </div>
                </div>
              )}
            </div>
          </main>
        </article>
        <section className="mw8 center">
          <h2 className="athelas ph3 ph0-l">Models</h2>
          <article className="pv4 bt bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">Face recognition</h1>
                <p className="f5 f4-l lh-copy athelas">
                  The ‘Face Detection’ model returns probability scores on the
                  likelihood that the image contains human faces and coordinate
                  locations of where those faces appear with a bounding box.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
                <img
                  rel="preload"
                  style={{ paddingTop: "5px" }}
                  alt="brain logo"
                  src={face_home_image}
                />
              </div>
            </div>
          </article>
          <article className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-reverse-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">Food recognition</h1>
                <p className="f5 f4-l lh-copy athelas">
                  The ‘Food’ model recognizes more than 1,000 food items in
                  images down to the ingredient level. This model is great for
                  building a health and wellness related app.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
                <img
                  rel="preload"
                  style={{ paddingTop: "5px" }}
                  alt="brain logo"
                  src={face_food_image}
                />
              </div>
            </div>
          </article>
          <article className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">Apparel recognition</h1>
                <p className="f5 f4-l lh-copy athelas">
                  The ‘Apparel’ model recognizes more than 100 fashion-related
                  concepts including clothing and accessories.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
                <img
                  rel="preload"
                  style={{ paddingTop: "5px" }}
                  alt="brain logo"
                  src={face_apparel_image}
                />
              </div>
            </div>
          </article>
          <article className="pv4 bt bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-reverse-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">General recognition</h1>
                <p className="f5 f4-l lh-copy athelas">
                  The ‘General’ model recognizes over 11,000 different concepts
                  including objects, themes, moods. This model is a great
                  all-purpose solution for most visual recognition needs.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
                <img
                  rel="preload"
                  style={{ paddingTop: "5px" }}
                  alt="brain logo"
                  src={face_general_image}
                />
              </div>
            </div>
          </article>
          <article className="pv4 bb b--black-10 ph3 ph0-l">
            <div className="flex flex-column flex-row-ns">
              <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                <h1 className="f3 athelas mt0 lh-title">Color recognition</h1>
                <p className="f5 f4-l lh-copy athelas">
                  The ‘Color’ model returns density values for dominant colors
                  present in images. Color predictions are returned in hex
                  format and also mapped to their closest W3C counterparts.
                </p>
              </div>
              <div className="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-80-ns">
                <img
                  rel="preload"
                  style={{ paddingTop: "5px" }}
                  alt="brain logo"
                  src={face_color_image}
                />
              </div>
            </div>
          </article>
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
