import React from "react";
import renderer from "react-test-renderer";
import SortingList from "./sorting-list.jsx";


describe(`SortingList snepshot test`, () => {
  it(`Should SortingList render correctly and will be open`, () => {
    const tree = renderer
      .create(<SortingList
        sortingState = {
          true
        }
        typeSorting = {
          `Popular`
        }
        onSortingTypeClick = {
          () => {}
        }
      />,
      // так как нет контейнера куда отрисовываться = делаем мокковый
      {
        createNodeMock: () => document.createElement(`form`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Should SortingList render correctly and will be close`, () => {
    const tree = renderer
      .create(<SortingList
        sortingState = {
          false
        }
        typeSorting = {
          `Popular`
        }
        onSortingTypeClick = {
          () => {}
        }
      />,
      // так как нет контейнера куда отрисовываться = делаем мокковый
      {
        createNodeMock: () => document.createElement(`form`)
      })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
