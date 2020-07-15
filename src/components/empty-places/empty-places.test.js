import React from "react";
import renderer from "react-test-renderer";
import EmptyPlaces from "./empty-places.jsx";

const town = `Dusseldorf`;

describe(`test EmptyPlaces`, () => {
  it(`Should EmptyPlaces render correctly`, () => {
    const tree = renderer
      .create(<EmptyPlaces
        town={town} />,
      // так как нет контейнера делаем моковый
      {
        createNodeMock: () => document.createElement(`div`)
      }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
