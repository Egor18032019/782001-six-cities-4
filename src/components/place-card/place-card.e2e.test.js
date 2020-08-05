import React from "react";
import Enzyme, {mount} from "enzyme";
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
    errorMessage: ``,
    favoriteOffers: ``
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
    const onFavoriteButtonClick = jest.fn();

    const mainScreen = mount(
        <Provider store={store}>
          <Router history={history}>

            <PlaceCard place = {
              place
            }
            onMainTitleClick = {
              onMainTitleClick
            }
            onFavoriteButtonClick = {
              onFavoriteButtonClick
            }
            onCardMouseEnter = {
              onCardMouseEnter
            }
            onCardMouseOut = {
              onCardMouseOut
            }
            authorizationStatus = {`NO_AUTH`}
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

  it(`Should  first "place-card__name" be pressed and change state`, () => {
    const onMainTitleClick = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onCardMouseOut = jest.fn();
    const onFavoriteButtonClick = jest.fn();

    const component = mount(
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
            onFavoriteButtonClick = {
              onFavoriteButtonClick
            }
            authorizationStatus = {`NO_AUTH`}
            />
          </Router>
        </Provider>
    );
    const titleOnMain = component.find(`.place-card__name`);
    titleOnMain.at(0).simulate(`click`);
    expect(onMainTitleClick.mock.calls.length).toBe(1);

  });

  it(`click or no click on favorite button`, () => {
    const onMainTitleClick = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onCardMouseOut = jest.fn();
    const onFavoriteButtonClick = jest.fn();

    const component = mount(
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
            onFavoriteButtonClick = {
              onFavoriteButtonClick
            }
            authorizationStatus = {`NO_AUTH`}
            />
          </Router>
        </Provider>
    );
    const favoriteButton = component.find(`.place-card__bookmark-button`);
    favoriteButton.at(0).simulate(`click`);
    expect(onFavoriteButtonClick).toHaveBeenCalledTimes(1);
  });

});
