import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
  TYPE: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
};

ReactDOM.render(
    <App
      placesCount = {Settings.PLACES}
      town = {Settings.CITIES}
      typePlaces = {Settings.TYPE}
    />,
    document.querySelector(`#root`)
);
