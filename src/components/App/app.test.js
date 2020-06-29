import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
};

const mockSettings = [{
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
},
{
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
},
{
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
}
];

describe(`test App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(< App placesCount = {
        Settings.PLACES
      }
      town = {
        Settings.CITIES
      }
      mockSettings = {
        mockSettings
      }
      onMainTitleClick = {
        () => {}
      }
      />,
      // так как нет контейнера делаем моковый
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// --?? снапшоты только смотрять размету -> зачем нам тестить  APP и Main --- можно же только Main??
// как настроить Ес линтер что бы он помогал называть  методы и свойтсва компонентов
