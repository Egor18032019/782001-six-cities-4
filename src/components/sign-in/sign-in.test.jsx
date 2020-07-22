import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";

describe(`SignIn snepshot test`, () => {
  it(`Should SignIn render correctly`, () => {
    const tree = renderer
      .create(<SignIn
        onSubmit = {
          () => {}
        }
      />,
      {
        createNodeMock: () => document.createElement(`div`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
