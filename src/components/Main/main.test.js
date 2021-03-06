import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
import Main from "./main.jsx";
import NameSpace from "../../reducer/name-space.js";
const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
};
const CITYLIST = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

const mockData = [
  {
    id: 0,
    city: `Amsterdam`,
    type: `Apartament`,
    title: `Beautiful & luxurious apartment at great location`,
    description: `Beautiful & luxurious apartment at great location`,
    price: 120,
    isBookmark: false,
    isPremium: true,
    rating: 4.8,
    coordinate: [52.3909553943508, 4.85309666406198, 16],
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
    title: `Beautiful & luxurious apartment at great location`,
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
},
{
  text: `It's like staying in a museum.Home is amazing.`,
  date: `2020-07-19T16:06:02.820Z`,
  id: 2,
  rating: 3,
}
];
const CARD = {
  id: 7,
  city: `Dusseldorf`,
  type: `House`,
  title: `Premium`,
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
};
const mockStore = configureStore([]);

describe(`snapshots test Main`, () => {
  it(`Should Main render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        data: mockData,
        isDataLoaded: true,
        town: `Dusseldorf`,
        errorMessage: ``,
        favoriteOffers: ``,
        nearbyOffers: CARD,
        isNearbyOffersLoading: true,
        reviews: MOCKREVIEWS,
        isReviewsLoading: true
      },
      [NameSpace.USERS]: {
        authorizationStatus: `AUTH`,
        users: `goro5@mail.ru`,
      },
    });

    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>

              <Main
                typeSorting = {
                  `Popular`
                }
                activeOffer = {
                  null
                }
                cityList = {
                  CITYLIST
                }
                email = {
                  `goro5@mail.ru`
                }
                authorizationStatus = {
                  `AUTH`
                }
                placesCount = {
                  Settings.PLACES
                }
                town = {
                  Settings.CITIES
                }
                places = {
                  mockData
                }
                onMainTitleClick = {
                  () => {}
                }
                onCityNameClick = {
                  () => {}
                }
                onCardMouseOut = {
                  () => {}
                }
                onFavoriteButtonClick = {
                  () => {}
                }
                onCardMouseEnter = {
                  () => {}
                }
                onSortingTypeClick = {
                  () => {}
                }
              />
            </Router>
          </Provider>,
          // так как нет контейнера делаем моковый
          {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
