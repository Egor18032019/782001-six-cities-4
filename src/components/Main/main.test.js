import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
};
const mockSettings = [
  {
    id: 1,
    city: `Amsterdam`,
    type: `Apartament`,
    description: `Beautiful & luxurious apartment at great location`,
    prise: 120,
    isBookmark: false,
    isPremium: false,
    rating: 11,
    coordinateX: 111,
    coordinateY: 111,

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
    coordinateX: 222,
    coordinateY: 222

  },
  {
    id: 3,
    city: `Amsterdam`,
    type: `house`,
    description: `big + warm + good`,
    prise: 120,
    isBookmark: false,
    isPremium: false,
    rating: 33,
    coordinateX: 333,
    coordinateY: 333
  }
];

describe(`test Main`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
            .create(< Main placesCount = {
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
            />)
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
