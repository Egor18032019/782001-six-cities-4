
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";


Enzyme.configure({
  adapter: new Adapter(),
});

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
  TYPE: [`Beautiful & luxurious apartment at great location`, `anyone floods`]
};


describe(`test Main e2e`, () => {
  test(`Should  title h2 be pressed`, () => {
    const onMainTitleClick = jest.fn();

    const mainScreen = shallow(<
      Main placesCount = {
        Settings.PLACES
      }
      town = {
        Settings.CITIES
      }
      typePlaces = {
        Settings.TYPE
      }
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
