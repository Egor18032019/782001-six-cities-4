import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";


const CARD = {
  id: 2,
  city: `Paris`,
  type: `House`,
  description: `big + warm + good`,
  prise: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinateX: 111,
  coordinateY: 111,
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

describe(`Property snepshot test`, () => {
  test(`Should Property render correctly`, () => {
    const tree = renderer
            .create(<Property
              place={CARD}
            />)
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
