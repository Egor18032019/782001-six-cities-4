import React from "react";
import renderer from "react-test-renderer";

import withSorting from "./with-sorting.js";

const MockComponent = () => {

  return (
    <div>
    </div>
  );
};


const MockComponentWrapped = withSorting(MockComponent);

it(`MockComponentWrapped is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      typeSorting={`Popular`}
      onSortingTypeClick={()=>{}}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
