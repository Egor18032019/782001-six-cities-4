import React from "react";
import renderer from "react-test-renderer";
import EmptyPlaces from "./empty-places.jsx";

describe(`test EmptyPlaces`, () => {
  it(`Should EmptyPlaces render correctly`, () => {
    const tree = renderer
      .create(<EmptyPlaces />,
      // так как нет контейнера делаем моковый
          {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
