import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
  TYPE: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`],
};

describe(`test App`, () => {
  it(`Render App`, () => {
    const tree = renderer
            .create(< App placesCount = {
              Settings.PLACES
            }
            town = {
              Settings.CITIES
            }
            typePlaces = {
              Settings.TYPE
            }
            onMainTitleClick = {
              () => {}
            }
            />)
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

// --? не получаеться у меня запусть только один тест ./node_modules/.bin/jest -t "Render App"
// -- ? если ты запустил один тест npm run test.jest -- -u -> то обновятся снепшоты только у этого теста ?
