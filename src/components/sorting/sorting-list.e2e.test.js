import React from "react";
import Enzyme, {
  mount
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingList from "./sorting-list.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});


describe(`test SortingList e2e`, () => {
  test(`Should all li be pressed`, () => {
    const onSelectClick = jest.fn();
    const onSelectItemClick = jest.fn();
    const handleClickOutside = jest.fn();

    const sortingMenu = mount(<SortingList
      isOpen = {
        true
      }
      typeSorting = {
        `Popular`
      }
      onSelectClick = {
        onSelectClick
      }
      onSelectItemClick = {
        onSelectItemClick
      }
      handleClickOutside = {
        handleClickOutside
      }
    />
    );
    // ищем все видимые li
    const liOnSortingMenu = sortingMenu.find(`.places__option`);
    // проходим по массиву найденых форычом и симулируем клик мышкой
    liOnSortingMenu.forEach(
        (li) => {
          li.simulate(`click`);
        }
    );
    expect(onSelectItemClick.mock.calls.length).toBe(liOnSortingMenu.length);
  });
  test(`Should  first li be pressed`, () => {
    const onSelectClick = jest.fn();
    const onSelectItemClick = jest.fn();
    const handleClickOutside = jest.fn();

    const sortingMenu = mount(<SortingList
      isOpen = {
        true
      }
      typeSorting = {
        `Popular`
      }
      onSelectClick = {
        onSelectClick
      }
      onSelectItemClick = {
        onSelectItemClick
      }
      handleClickOutside = {
        handleClickOutside
      }
    />
    );
    // ищем все видимые li
    const liOnSortingMenu = sortingMenu.find(`.places__option`);
    liOnSortingMenu.at(0).simulate(`click`);
    // ожидаем что один раз вызовется
    expect(onSelectItemClick.mock.calls.length).toBe(1);
  });
});
