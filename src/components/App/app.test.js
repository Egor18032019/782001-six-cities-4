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


// --?? снапшоты только смотрять размету -> зачем нам тестить  APP и Main --- можно же только Main??
// как настроить Ес линтер что бы он помогал называть  методы и свойтсва компонентов
