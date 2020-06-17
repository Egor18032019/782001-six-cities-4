import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
  TYPE: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
};

it(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(<Main
      placesCount = {Settings.PLACES}
      town = {Settings.CITIES}
      typePlaces = {Settings.TYPE}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
