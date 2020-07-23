import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import App from "./app.jsx";
import NameSpace from "../../reducer/name-space.js";

const mockSettings = [{
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
  city: `Paris`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.929309666406198],
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
  city: `Amsterdam`,
  type: `House`,
  description: `big + warm + good`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
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
}
];

const mockStore = configureStore([]);

describe(`snapshots test App`, () => {
  it(`Render App for good loading`, () => {
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
      [NameSpace.USERS]: {
        authorizationStatus: `NO_AUTH`,
        users: ``,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            < App
              email = {
                `goro5@mail.ru`
              }
              authorizationStatus = {
                `AUTH`
              }
              onMainTitleClick = {
                () => {}
              }
              onCityNameClick = {
                () => {}
              }
              isDataLoaded = {
                true
              }
              cardId = {
                null
              }
              activeTown = {
                `Amsterdam`
              }
              placesCount = {
                121
              }
              activeOffers = {
                mockSettings
              }
              active = {
                `mainPages`
              }
            />
          </Provider>,
          // так как нет контейнера делаем моковый
          {
            createNodeMock: () => document.createElement(`div`)
          })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`Render App for bad loading`, () => {
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
      [NameSpace.USERS]: {
        authorizationStatus: `NO_AUTH`,
        users: ``,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            < App
              email = {
                `goro5@mail.ru`
              }
              authorizationStatus = {
                `AUTH`
              }
              onMainTitleClick = {
                () => {}
              }
              onCityNameClick = {
                () => {}
              }
              isDataLoaded = {
                false
              }
              cardId = {
                null
              }
              activeTown = {
                `Amsterdam`
              }
              placesCount = {
                121
              }
              activeOffers = {
                mockSettings
              }
              active = {
                `mainPages`
              }
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


// как настроить Ес линтер что бы он помогал называть  методы и свойтсва компонентов
