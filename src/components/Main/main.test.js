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
    id: 3,
    city: `Amsterdam`,
    type: `house`,
    description: `big + warm + good`,
    prise: 120,
    isBookmark: false,
    isPremium: false,
    rating: 33,
    coordinate: [52.369553943508, 4.85309666406198]
  }
];

describe(`test Main`, () => {
  it(`Should Main render correctly`, () => {
    const tree = renderer
            .create(<Main placesCount = {
              Settings.PLACES
            }
            town = {
              Settings.CITIES
            }
            places = {
              mockSettings
            }
            onMainTitleClick = {
              () => {}
            }
            />,
            // так как нет контейнера делаем моковый
            {
              createNodeMock: () => document.createElement(`div`)
            }
            )
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
