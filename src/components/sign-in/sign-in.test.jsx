import React from "react";
import {Router} from "react-router-dom";
import renderer from "react-test-renderer";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();

import SignIn from "./sign-in.jsx";

describe(`SignIn snepshot test`, () => {
  it(`Should SignIn render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <SignIn
              onLoginUsers = {
                () => {}
              }
              activeTown = {`Paris`}
              email = {``}
              authorizationStatus = {`NO_AUTH`} />
          </Router>,
          {
            createNodeMock: () => document.createElement(`div`)
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
