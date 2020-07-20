import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";

const CARD = {
  id: 2,
  city: `Paris`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [52.369553943508, 4.85309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: `У нас всегда свежие булочки`,
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
};
const mockStore = configureStore([]);

describe(`Property snepshot test`, () => {
  test(`Should Property render correctly`, () => {
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
                  <Property
                    place={CARD}
                  />
                </Provider>, {
                  createNodeMock: () => document.createElement(`div`)
                })
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
