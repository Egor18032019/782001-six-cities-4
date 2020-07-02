import React from "react";
import Enzyme, {
  mount
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  PLACES: 111,
  CITIES: `Amsterdam !`,
};

const mockSettings = [{
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
},
{
  id: 3,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
},
{
  id: 4,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
}
];


describe(`test Main e2e`, () => {
  test(`Should  title h2 be pressed`, () => {
    const onMainTitleClick = jest.fn();
    const onCityNameClick = jest.fn();

    const mainScreen = mount(<
      Main placesCount = {
        Settings.PLACES
      }
      town = {
        Settings.CITIES
      }
      places = {
        mockSettings
      }
      onCityNameClick = {
        onCityNameClick
      }
      onMainTitleClick = {
        onMainTitleClick
      }
    />
    );
    // ищем все видимые заголовки
    const titleOnMain = mainScreen.find(`.place-card__name`);
    // проходим по массиву найденых форычом и симулируем клик мышкой
    titleOnMain.forEach(
        (title) => {
          title.props().onClick();
        // title.simulate(`click`); - второй вариант написания
        }
    );
    // ожидаем что onMainTitleClick вызовется в количстве раз равным количеству найденых загловков
    expect(onMainTitleClick.mock.calls.length).toBe(titleOnMain.length);
  });
  test(`Should  first title h2 be pressed`, () => {
    const onMainTitleClick = jest.fn();
    const onCityNameClick = jest.fn();

    const mainScreen = mount(<
      Main placesCount = {
        Settings.PLACES
      }
      town = {
        Settings.CITIES
      }
      places = {
        mockSettings
      }
      onCityNameClick = {
        onCityNameClick
      }
      onMainTitleClick = {
        onMainTitleClick
      }
    />
    );
    // ищем все видимые заголовки
    const allTitleOnMain = mainScreen.find(`.place-card__name`);
    allTitleOnMain.at(0).simulate(`click`);
    // ожидаем что один раз вызовется
    expect(onMainTitleClick.mock.calls.length).toBe(1);
  });
});
