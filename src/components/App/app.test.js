import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
  TYPE: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
};


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      placesCount = {Settings.PLACES}
      town = {Settings.CITIES}
      typePlaces = {Settings.TYPE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
