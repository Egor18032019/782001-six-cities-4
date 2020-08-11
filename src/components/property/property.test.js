import React from "react";
import {
  Provider
} from "react-redux";
import {
  Router
} from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Property from "./property.jsx";
import NameSpace from "../../reducer/name-space.js";
import {
  createBrowserHistory
} from "history";
import thunk from 'redux-thunk';
const history = createBrowserHistory();
const PLACE = [{
  id: 0,
  city: `Amsterdam`,
  type: `Apartament`,
  description: `Beautiful & luxurious apartment at great location`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  mainPhoto: `img/apartment-01.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
  `, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
  `, `и пусть весь мир подождет..`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Angelina`
  }
}];
const mockData = [{
  id: 0,
  city: `Amsterdam`,
  type: `Apartament`,
  description: `Beautiful & luxurious apartment at great location`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  mainPhoto: `img/apartment-01.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
  `, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
  `, `и пусть весь мир подождет..`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Angelina`
  }
},
{
  id: 1,
  city: `Amsterdam`,
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
},
{
  id: 2,
  city: `Cologne`,
  type: `House`,
  description: `big + warm + good`,
  price: 66,
  isBookmark: false,
  isPremium: true,
  rating: 2.8,
  coordinate: [50.9109553943508, 6.929309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
},
{
  id: 3,
  city: `Amsterdam`,
  type: `House`,
  description: `big + warm + good`,
  price: 66,
  isBookmark: false,
  isPremium: true,
  rating: 2.8,
  coordinate: [52.3809553943508, 4.939309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
},
{
  id: 4,
  city: `Cologne`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [50.9009553943508, 6.939309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
},
{
  id: 5,
  city: `Cologne`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [50.9309553943508, 6.939309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
},
{
  id: 6,
  city: `Brussels`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [50.8409553943508, 4.339309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
},
{
  id: 7,
  city: `Paris`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [53.5609553943508, 9.939309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
},
{
  id: 7,
  city: `Dusseldorf`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [51.2809553943508, 6.739309666406198],
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
}
];
const MOCKREVIEWS = [{
  text: `Home is amazing. It's like staying in a museum`,
  date: `2020-07-19T16:06:01.820Z`,
  id: 1,
  rating: 2,
  user: {
    avatar: `avatar_url1`,
    id: 1,
    isPro: `is_pro`,
    name: `Test1`
  }
},
{
  text: `It's like staying in a museum.Home is amazing.`,
  date: `2020-07-19T16:06:02.820Z`,
  id: 2,
  rating: 3,
  user: {
    avatar: `avatar_url2`,
    id: 2,
    isPro: `is_pro`,
    name: `Test2`
  }

}
];
const PLACES = [{
  id: 1,
  city: `Amsterdam`,
  type: `Apartament`,
  description: `Beautiful & luxurious apartment at great location`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  mainPhoto: `img/apartment-01.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
  `, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
  `, `и пусть весь мир подождет..`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Angelina`
  }
}];
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe(`Property snepshot test`, () => {
  test(`Should Property render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        data: mockData,
        isDataLoaded: true,
        town: `Amsterdam`,
        errorMessage: ``,
        favoriteOffers: ``,
        nearbyOffers: PLACES,
        isNearbyOffersLoading: true,
        reviews: MOCKREVIEWS,
        isReviewsLoading: true
      }
    });
    const tree = renderer
        .create(<Provider store = {store}>
          <Router history = {history} >
            <Property
              place = {PLACE}
              email = {``}
              choiseId = {0}
            />
          </Router >
        </Provider>,
        {createNodeMock: () => document.createElement(`div`)})
    .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
