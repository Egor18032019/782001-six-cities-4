import React from "react";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
import PlaceCard from "./place-card.jsx";
import NameSpace from "../../reducer/name-space.js";

const PLACE = {
  id: 1,
  city: `Amsterdam`,
  type: `Private room`,
  title: `pro`,
  description: `Wood and Stone`,
  price: 80,
  isBookmark: true,
  isPremium: false,
  rating: 3,
  coordinate: [52.369553943508, 4.85309666406198],
  mainPhoto: `img/room.jpg`,
  bedrooms: 0,
  maxAdults: 2,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`И где тут что то будет написано`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
`, `Быть в Амстердаме и не покурить?`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Monro`
  }
};
const PLACES = [{
  id: 1,
  city: `Amsterdam`,
  title: `Beautiful & luxurious apartment at great location`,
  type: `Private room`,
  description: `Wood and Stone`,
  price: 80,
  isBookmark: true,
  isPremium: false,
  rating: 3,
  coordinate: [52.369553943508, 4.85309666406198],
  mainPhoto: `img/room.jpg`,
  bedrooms: 0,
  maxAdults: 2,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`И где тут что то будет написано`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
`, `Быть в Амстердаме и не покурить?`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Monro`
  }
}];
const MOCKREVIEWS = [{
  text: `Home is amazing. It's like staying in a museum`,
  date: `2020-07-19T16:06:01.820Z`,
  id: 1,
  rating: 2,
},
{
  text: `It's like staying in a museum.Home is amazing.`,
  date: `2020-07-19T16:06:02.820Z`,
  id: 2,
  rating: 3,
}
];
const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    data: PLACES,
    isDataLoaded: true,
    town: `Amsterdam`,
    errorMessage: ``,
    favoriteOffers: ``,
    nearbyOffers: PLACE,
    isNearbyOffersLoading: true,
    reviews: MOCKREVIEWS,
    isReviewsLoading: true
  },
  [NameSpace.USERS]: {
    authorizationStatus: `NO_AUTH`,
    users: ``,
  },
});

describe(`PlaceCard snepshot test`, () => {
  it(`Should PlaceCard render correctly`, () => {
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>

              <PlaceCard place = {PLACE}
                authorizationStatus = {`NO_AUTH`}
                onMainTitleClick = {
                  () => {}
                }
                onFavoriteButtonClick = {
                  () => {}
                }
                onCardMouseEnter = {
                  () => {}
                }
                onCardMouseOut = {
                  () => {}
                }
              />
            </Router>
          </Provider>,
          // так как нет контейнера куда отрисовываться = делаем мокковый
          {
            createNodeMock: () => document.createElement(`div`)
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
