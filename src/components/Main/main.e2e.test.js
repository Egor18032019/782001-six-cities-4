import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  PLACES: 111,
  CITIES: `Amsterdam !`,
};

const mockSettings = [
  {
    id: 1,
    city: `Amsterdam`,
    type: `Apartament`,
    description: `Beautiful & luxurious apartment at great location`,
    prise: 120,
    isBookmark: false,
    isPremium: false,
    rating: 11,
    coordinateX: 111,
    coordinateY: 111,

  },
  {
    id: 2,
    city: `Amsterdam`,
    type: `Private room`,
    description: `Wood and Stone`,
    prise: 120,
    isBookmark: false,
    isPremium: false,
    rating: 22,
    coordinateX: 222,
    coordinateY: 222

  },
  {
    id: 3,
    city: `Amsterdam`,
    type: `house`,
    description: `big + warm + good`,
    prise: 120,
    isBookmark: false,
    isPremium: false,
    rating: 33,
    coordinateX: 333,
    coordinateY: 333
  }
];


describe(`test Main e2e`, () => {
  test(`Should  title h2 be pressed`, () => {
    const onMainTitleClick = jest.fn();

    const mainScreen = mount(<
      Main
      placesCount = {
        Settings.PLACES
      }
      town = {
        Settings.CITIES
      }
      mockSettings={mockSettings}

      onMainTitleClick = {
        onMainTitleClick
      }
    />
    );
    // ищем все видимые заголовки
    const titleOnMain = mainScreen.find(`place-card__name`);
    // проходим по массиву найденых форычом и симулируем клик мышкой
    titleOnMain.forEach(
        (title)=>{
          title.props().onClick();
          // title.simulate(`click`); - второй вариант написания
        }
    );
    // ожидаем что onMainTitleClick вызовется в количстве раз равным количеству найденых загловков
    expect(onMainTitleClick.mock.calls.length).toBe(titleOnMain.length);
  });
});
