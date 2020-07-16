import {
  mockSettings
} from "../../mocks/offers.js";

import {getFilterOffersOnCity} from '../../utils';

// Определяем действия(actions)
const ActionType = {
  CHANGE_TOWN: `CHANGE_TOWN`,
  GET_OFFERS: `GET_OFFERS`,
};

// Объект начального состояния(state):
const initialState = {
  active: `mainPages`,
  cardId: null,
  town: `Amsterdam`,
  offers: getFilterOffersOnCity(mockSettings, `Amsterdam`),
  placesCount: getFilterOffersOnCity(mockSettings, `Amsterdam`).length,
};


const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
        offers: filterOnCity(action.payload),
        placesCount: filterOnCity(action.payload).length
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        active: `property`,
        cardId: action.cardId,
      });
    default:
      return state;
  }
  // return state;
};

const ActionActive = {
  activeState: (place) => ({
    type: ActionType.GET_OFFERS, // обязательно поле type так как по нему пробегамся swit-чом
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
  offersReducer,
  ActionType,
  ActionActive,
  ActionTown,
};
