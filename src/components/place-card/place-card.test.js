import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

const PLACE = {
  id: 1,
  city: `Amsterdam`,
  type: `Apartament`,
  description: `Beautiful & luxurious apartment at great location`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 11,
  coordinate: [52.369553943508, 4.85309666406198]
};


describe(`PlaceCard snepshot test`, () => {
  it(`Should PlaceCard render correctly`, () => {
    const tree = renderer
      .create(< PlaceCard place = {
        PLACE
      }
      onMainTitleClick = {
        () => {}
      }
      onHoverCard = {
        () => {}
      }
      onLeaveCard = {
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
