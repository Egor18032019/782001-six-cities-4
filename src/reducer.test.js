import {
  reducer,
  ActionActive,
  ActionTown,
  ActionType
} from "./reducer.js";

import {
  mockSettings
} from "./mocks/offers.js";
// TODO зачем я сюда данные импортировал ? Вспомнить и записать
let filterOnCity = (town) => {
  return mockSettings.filter((element) => element.city === town);
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    active: `mainPages`,
    cardId: null,
    town: `Amsterdam`,
    placesCount: 3,
    offers: filterOnCity(`Amsterdam`),
  });
});

it(`Reducer should increment current cardId by a given value`, () => {
  expect(reducer({
    active: `mainPages`,
    cardId: 0, // что было и что будет изменено
  }, {
    type: ActionType.GET_OFFERS,
    cardId: 1, // что пришло
  })).toEqual({
    active: `property`, // что изменилось
    cardId: 1 // что получили
  });

  expect(reducer({
    cardId: 0, // что было
  }, {
    type: ActionType.INCREMENT_STEP,
    cardId: 0,
  })).toEqual({
    cardId: 0,
  });
});

it(`The reducer should change the city to the value that came in`, () => {
  expect(reducer({
    active: `mainPages`,
    cardId: null,
    town: `Amsterdam`,
    placesCount: 3,
    offers: filterOnCity(`Amsterdam`),
  }, {
    type: ActionType.CHANGE_TOWN,
    payload: `Paris`,
  })).toEqual({
    active: `mainPages`,
    cardId: null,
    town: `Paris`,
    placesCount: 1,
    offers: filterOnCity(`Paris`),
  });

  expect(reducer({
    active: `mainPages`,
    cardId: null,
    town: `Amsterdam`,
    placesCount: 3,
    offers: filterOnCity(`Amsterdam`),
  }, {
    type: ActionType.CHANGE_TOWN,
    payload: `Amsterdam`,
  })).toEqual({
    active: `mainPages`,
    cardId: null,
    town: `Amsterdam`,
    placesCount: 3,
    offers: filterOnCity(`Amsterdam`),
  });
});

describe(`Action work correctly`, () => {
  it(`ActionActive for cardId returns correct action`, () => {
    expect(ActionActive.activeState({
      id: 1
    })).toEqual({
      type: ActionType.GET_OFFERS,
      cardId: 1,
    });
  });

  it(`ActionTown for payload returns correct action`, () => {
    expect(ActionTown.changeCity(`Dusseldorf`)).toEqual({
      type: ActionType.CHANGE_TOWN,
      payload: `Dusseldorf`,
    });
  });

});
