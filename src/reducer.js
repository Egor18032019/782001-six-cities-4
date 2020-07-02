import {
  mockSettings
} from "./mocks/offers.js";

// Определяем действия(actions)
const ActionType = {
  CHANGE_TOWN: `CHANGE_TOWN`,
  GET_OFFERS: `GET_OFFERS`,
};

let filterOnCity = (town) => {
  return mockSettings.filter((element) => element.city === town);
};
// Объект начального состояния(state):
const initialState = {
  active: `mainPages`,
  cardId: null,
  town: `Amsterdam`,
  // TODO: сделать что бы автоматом считала кол-во элементов и записывала его в PlaceCount
  placesCount: 121,
  offers: filterOnCity(`Amsterdam`),
};

// Редьюсер. Функция-редьюсер принимает в качестве параметров текущий state и действие (action).
// Результатом выполнение редьюсера станет новое состояние.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
        offers: filterOnCity(action.payload)
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        cardId: action.cardId,
        active: `property`
      });
  }
  return state;
};

const ActionActive = {
  activeState: (place) => ({
    type: ActionType.GET_OFFERS, // обязательно поле type
    cardId: place.id,
  })
};

const ActionTown = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_TOWN,
    payload: city,
  }),
};


export {
  reducer,
  ActionType,
  ActionActive,
  ActionTown,
};
