import React from "react";
import Enzyme, {
  mount, shallow
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const place = {
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
};
const forKey = `19.06.20`;

describe(`test PlaceCard e2e`, () => {
  it(`hover or no hover`, () => {
    const onMainTitleClick = jest.fn();
    const onHoverCard = jest.fn();
    const onLeaveCard = jest.fn();

    const mainScreen = mount(<
      PlaceCard place = {
        place
      }
      onMainTitleClick = {
        onMainTitleClick
      }
      forKey = {
        forKey
      }
      onHoverCard = {
        onHoverCard
      }
      onLeaveCard = {
        onLeaveCard
      }
    />
    );
    // симулируем наведение и убирание мышки onMouseLeave
    mainScreen.simulate(`mouseEnter`);
    mainScreen.simulate(`mouseLeave`);
    // mainScreen.props().onMouseEnter();
    // mainScreen.props().onMouseLeave();
    // ожидаем что onMainTitleClick вызовется в количстве раз равным количеству найденых загловков
    expect(onHoverCard.mock.calls.length).toBe(1);
    expect(onLeaveCard.mock.calls.length).toBe(1);
  });

  it(`click title or no click`, () => {
    const onMainTitleClick = jest.fn();
    const onHoverCard = jest.fn();
    const onLeaveCard = jest.fn();

    const mainScreen = shallow(<
      PlaceCard place = {
        place
      }
      onMainTitleClick = {
        onMainTitleClick
      }
      forKey = {
        forKey
      }
      onHoverCard = {
        onHoverCard
      }
      onLeaveCard = {
        onLeaveCard
      }
    />
    );
    // --?? почему то не ищет этот элемент. В снепшоте посмотрел он отрисовывается
    const titleOnMain = mainScreen.find(`.place-card__name`);
    // titleOnMain.props().onClick();
    titleOnMain.simulate(`click`);
    expect(onMainTitleClick.mock.calls.length).toBe(1);
  });

});
