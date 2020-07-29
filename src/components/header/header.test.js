import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

describe(`Header snepshot test`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(<Header
        email = {
          `goro4@mail.ru`
        }
        authorizationStatus = {
          `AUTH`
        }
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
