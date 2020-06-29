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
  id: 2,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 120,
  isBookmark: false,
  isPremium: false,
  rating: 22,
  coordinate: [52.369553943508, 4.85309666406198]
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
    const titleOnMain = mainScreen.find(`.place-card__name`);
    titleOnMain.props().onClick();
    // titleOnMain.simulate(`click`);
    expect(onMainTitleClick.mock.calls.length).toBe(1);
  });

  it(`Should  first title h2 be pressed`, () => {
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
    const titleOnMain = mainScreen.find(`.place-card__name`);
    titleOnMain.at(0).props().onClick();
    // titleOnMain.simulate(`click`);
    expect(onMainTitleClick.mock.calls.length).toBe(1);
  });

});
