import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/app.jsx";

const Settings = {
  Places: 312,
  Cities: `Amsterdam !`
};

ReactDOM.render(
    <App
      placesCount = {Settings.Places}
      town={Settings.Cities}
    />,
    document.querySelector(`#root`)
);
