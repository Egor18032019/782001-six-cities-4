import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const PLACE = [{
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  price: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
}];

const handlerClickOnTitle = () => {
};
const placesCount = 3;
const town = `Ekaterinburg`;

describe(`Map snepshot test`, () => {
  it(`Should map and point render correctly`, () => {
    const tree = renderer
      .create(<Map
        placesCount={placesCount}
        town={town}
        places={PLACE}
        onMainTitleClick={handlerClickOnTitle}
      />,
      // так как нет контейнера делаем моковый
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
