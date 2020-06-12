import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`
};

ReactDOM.render(
    <App
      placesCount = {Settings.PLACES}
      town = {Settings.CITIES}
    />,
    document.querySelector(`#root`)
);
