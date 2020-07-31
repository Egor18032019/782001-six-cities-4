import React from "react";
import Enzyme, {
  mount, shallow
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
import PlaceCard from "./place-card.jsx";
import NameSpace from "../../reducer/name-space.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const mockStore = configureStore([]);
const store = mockStore({
  [NameSpace.DATA]: {
    data: [],
    isDataLoaded: false,
    placesCount: 0,
    town: `Amsterdam`,
    errorMessage: ``
  },
  [NameSpace.OFFERS]: {
    active: `mainPages`,
    cardId: null,
  },
  [NameSpace.USERS]: {
    authorizationStatus: `NO_AUTH`,
    users: ``,
  },
});

const place = {
  id: 1,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  price: 80,
  isBookmark: true,
  isPremium: false,
  rating: 3,
  coordinate: [52.369553943508, 4.85309666406198],
  mainPhoto: `img/room.jpg`,
  bedrooms: 0,
  maxAdults: 2,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`И где тут что то будет написано`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
`, `Быть в Амстердаме и не покурить?`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Monro`
  }
};

describe(`test PlaceCard e2e`, () => {
  it(`hover or no hover`, () => {
    const onMainTitleClick = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onCardMouseOut = jest.fn();

    const mainScreen = mount(
        <Provider store={store}>
          <Router history={history}>

            <PlaceCard place = {
              place
            }
            onMainTitleClick = {
              onMainTitleClick
            }
            onCardMouseEnter = {
              onCardMouseEnter
            }
            onCardMouseOut = {
              onCardMouseOut
            }
            />
          </Router>
        </Provider>
    );
    // симулируем наведение и убирание мышки onMouseLeave
    mainScreen.simulate(`mouseEnter`);
    mainScreen.simulate(`mouseLeave`);
    // mainScreen.props().onHoverCard();
    // mainScreen.props().onLeaveCard();
    // ожидаем что onMainTitleClick вызовется в количстве раз равным количеству найденых загловков
    expect(onCardMouseEnter.mock.calls.length).toBe(1);
    expect(onCardMouseOut.mock.calls.length).toBe(1);
  });

  it(`click title or no click`, () => {
    const onMainTitleClick = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onCardMouseOut = jest.fn();

    const component = shallow(
        <Provider store={store}>
          <Router history={history}>

            <PlaceCard place = {
              place
            }
            onMainTitleClick = {
              onMainTitleClick
            }
            onCardMouseEnter = {
              onCardMouseEnter
            }
            onCardMouseOut = {
              onCardMouseOut
            }
            />
          </Router>
        </Provider>
    );
    const titleOnMain = component.find(`.place-card__name`);
    titleOnMain.props().onClick();
    // titleOnMain.simulate(`click`);
    expect(onMainTitleClick.mock.calls.length).toBe(1);
  });

  it(`Should  first title h2 be pressed`, () => {

    store.dispatch = jest.fn();

    const component = shallow(
        <Provider store={store}>
          <Router history={history}>

            <PlaceCard place = {
              place
            }
            />
          </Router>
        </Provider>
    );
    const titleOnMain = component.find(`.place-card__name`);
    titleOnMain.at(3).props().onClick();
    // titleOnMain.simulate(`click`);
    expect(store.dispatch).toHaveBeenCalledTimes(3);
  });

});
