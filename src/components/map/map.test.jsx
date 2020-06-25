import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const PLACE = {
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
};


describe(`Map snepshot test`, () => {
  it(`Should map and point render correctly`, () => {
    const tree = renderer
            .create(<Map
              place = {
                PLACE
              }
            />)
              .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
