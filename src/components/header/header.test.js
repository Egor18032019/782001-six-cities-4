import React from "react";
import renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();

import Header from "./header.jsx";

describe(`Header snepshot test`, () => {
  it(`Should Header render correctly`, () => {
    const tree = renderer
      .create(
          <Router history={history}>
            <Header
              email = {
                `goro4@mail.ru`
              }
              authorizationStatus = {
                `AUTH`
              }
            />
          </Router>,
          {
            createNodeMock: () => document.createElement(`div`)
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
