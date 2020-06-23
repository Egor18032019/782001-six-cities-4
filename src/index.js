import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";
import {
  mockSettings
} from "./mocks/offers.js";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
};

ReactDOM.render(<
  App placesCount = {
    Settings.PLACES
  }
  town = {
    Settings.CITIES
  }
  mockSettings = {
    mockSettings
  }
/>,
document.querySelector(`#root`)
);
