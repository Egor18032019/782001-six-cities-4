import React from "react";
import renderer from "react-test-renderer";

import PlacesList from "./places-list.jsx";
// TODO сделать два теста . в 1 массив с данными
// во стом случаи пустой массив
// подумать как атк модно сделать в APP


const PLACE = {
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
};


describe(`PlacesList snepshot test`, () => {
  it(`Should PlacesList render correctly`, () => {
    const tree = renderer
      .create(<PlacesList place = {
        PLACE
      }
      onMainTitleClick = {
        () => {}
      }
      onCardMouseEnter = {
        () => {}
      }
      onCardMouseOut = {
        () => {}
      }
      />,
      // так как нет контейнера куда отрисовываться = делаем мокковый
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should PlacesList render correctly whit zero array`, () => {
    const tree = renderer
      .create(<PlacesList
        places = { [] }
        activeOffer = {1}
        typeSorting = {`Popular`}
        placesCount = {11}
        town = {`Amsterdam`}
        onSortingTypeClick = {
          () => {}
        }
        onMainTitleClick = {
          () => {}
        }
        onCardMouseEnter = {
          () => {}
        }
        onCardMouseOut = {
          () => {}
        }
      />,
      // так как нет контейнера куда отрисовываться = делаем мокковый
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
