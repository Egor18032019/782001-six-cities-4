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
const FORKEY = `19.06.20`;


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
              forKey = {
                FORKEY
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
