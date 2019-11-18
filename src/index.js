import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "tachyons";
import * as serviceWorker from "./serviceWorker";
import Submiter from './services/Submiter';
import Requester from './services/requester';

const submiter = new Submiter(new Requester());
const props = {
  submiter
}
ReactDOM.render(
  <BrowserRouter>
    <App {...props}/>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
