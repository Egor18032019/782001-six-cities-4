import * as React from "react";
import renderer from "react-test-renderer";

import withSorting from "./with-sorting";

const MockComponent = () => {
  return (
    <div>
    </div>
  );
};

const MockComponentWrapped = withSorting(MockComponent);

describe(`Snapshot of withSorting`, () => {

  it(`MockComponentWrapped is rendered correctly`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        typeSorting={`Popular`}
        onSortingTypeClick={() => { }}
      />
    ), {
      createNodeMock() {
        return {};
      }
    }).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
