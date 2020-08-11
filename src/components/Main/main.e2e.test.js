import React from "react";
import Enzyme, {
  mount
} from "enzyme";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";
import NameSpace from "../../reducer/name-space.js";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  PLACES: 111,
  CITIES: `Dusseldorf !`,
};
const CITYLIST = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];
const mockSettings = [
  {
    id: 0,
    city: `Amsterdam`,
    type: `Apartament`,
    description: `Beautiful & luxurious apartment at great location`,
    title: `Beautiful & luxurious apartment at great location`,
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
    price: 66,
    isBookmark: false,
    isPremium: true,
    rating: 2.8,
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
    id: 5,
    city: `Cologne`,
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
    id: 7,
    city: `Hamburg`,
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
  },
  {
    id: 8,
    city: `Dusseldorf`,
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

const mockData = [
  {
    id: 0,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
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
  title: `pro`,
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
};
describe(`test Main e2e`, () => {
  test(`Should  title h2 be pressed`, () => {
    const onMainTitleClick = jest.fn();
    const onCityNameClick = jest.fn();
    const onCardMouseOut = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onSortingTypeClick = jest.fn();
    const onFavoriteButtonClick = jest.fn();
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
        users: `test@mail.ru`
      },
    });
    const mainScreen = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              cityList = {
                CITYLIST
              }
              typeSorting = {
                `Popular`
              }
              activeOffer = {
                null
              }
              placesCount = {
                Settings.PLACES
              }
              town = {
                Settings.CITIES
              }
              places = {
                mockSettings
              }
              onMainTitleClick = {
                onMainTitleClick
              }
              onCityNameClick = {
                onCityNameClick
              }
              onCardMouseOut = {
                onCardMouseOut
              }
              onFavoriteButtonClick = {
                onFavoriteButtonClick
              }
              onCardMouseEnter = {
                onCardMouseEnter
              }
              onSortingTypeClick = {
                onSortingTypeClick
              }
              email = {
                `test@mail.ru`
              }
              authorizationStatus = {
                `AUTH`
              }
            />
          </Router>
        </Provider>
    );
    // ищем все видимые заголовки
    const titleOnMain = mainScreen.find(`.place-card__name`);
    // проходим по массиву найденых форычом и симулируем клик мышкой
    titleOnMain.forEach(
        (title) => {
          // title.props().onClick();
          title.simulate(`click`);
        //  - второй вариант написания
        }
    );
    // ожидаем что onMainTitleClick вызовется в количстве раз равным количеству найденых загловков
    expect(onMainTitleClick.mock.calls.length).toBe(titleOnMain.length);
  });
  test(`Should  first title h2 be pressed`, () => {
    const onMainTitleClick = jest.fn();
    const onCityNameClick = jest.fn();
    const onCardMouseOut = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onSortingTypeClick = jest.fn();
    const onFavoriteButtonClick = jest.fn();
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
        users: `qw@gmail.ru`,
      },
    });
    const mainScreen = mount(
        <Provider store={store}>
          <Router history={history}>
            <Main
              typeSorting = {
                `Popular`
              }
              cityList = {
                CITYLIST
              }
              activeOffer = {
                null
              }
              placesCount = {
                Settings.PLACES
              }
              town = {
                Settings.CITIES
              }
              places = {
                mockSettings
              }
              onMainTitleClick = {
                onMainTitleClick
              }
              onCityNameClick = {
                onCityNameClick
              }
              onCardMouseOut = {
                onCardMouseOut
              }
              onCardMouseEnter = {
                onCardMouseEnter
              }
              onFavoriteButtonClick = {
                onFavoriteButtonClick
              }
              onSortingTypeClick = {
                onSortingTypeClick
              }
              email = {
                `qw@gmail.ru`
              }
              authorizationStatus = {
                `AUTH`
              }
            />
          </Router>
        </Provider>
    );
    // ищем все видимые заголовки
    const allTitleOnMain = mainScreen.find(`.place-card__name`);
    allTitleOnMain.at(0).simulate(`click`);
    // ожидаем что один раз вызовется
    expect(onMainTitleClick.mock.calls.length).toBe(1);
  });
});
