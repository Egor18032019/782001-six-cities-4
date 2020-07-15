import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import configureStore from "redux-mock-store";

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

const mockStore = configureStore([]);

describe(`Map snapshots test`, () => {
  it(`Should map and point render correctly`, () => {
    const store = mockStore({
      active: `mainPages`,
      cardId: null,
      town: `Amsterdam`,
      // TODO: сделать что бы автоматом считала кол-во элементов и записывала его в PlaceCount
      placesCount: 1,
      offers: []
    });


    const tree = renderer
      .create(<Map

        placesCount={placesCount}
        town={town}
        places={PLACE}
        store={store}
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
