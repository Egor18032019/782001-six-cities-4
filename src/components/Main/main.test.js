import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
};
const mockSettings = [
  {
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
    id: 7,
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
            onCityNameClick = {
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
