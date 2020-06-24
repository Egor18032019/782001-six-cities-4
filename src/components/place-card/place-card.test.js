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
  coordinateX: 111,
  coordinateY: 111,
};


describe(`PlaceCard snepshot test`, () => {
  it(`Should PlaceCard render correctly`, () => {
    const tree = renderer
            .create(<PlaceCard
              place = {
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
            />)
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
