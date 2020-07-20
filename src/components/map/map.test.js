import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";

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


const mockStore = configureStore([]);

describe(`Map snapshots test`, () => {
  it(`Should map and point render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        data: [],
        isDataLoaded: false,
        placesCount: 0,
        town: `Amsterdam`,
        errorMessage: ``
      },
      [NameSpace.OFFERS]: {
        active: `mainPages`,
        cardId: null,
      },
    });


    const tree = renderer
      .create(
          <Provider store={store}>
            <Map
              activeOffers={PLACE}
              activeTown={`Amsterdam`}
              activeOffer={2}
            />
          </Provider>,
          // так как нет контейнера делаем моковый
          {
            createNodeMock: () => document.createElement(`div`)
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
