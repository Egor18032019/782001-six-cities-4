import {
  mockSettings
} from "./mocks/offers.js";

//  На данном этапе нам потребуется несколько действий:
//  изменение города
//  и получение списка предложений.

// Определяем действия(actions)
const ActionType = {
  CHANGE_TOWN: `CHANGE_TOWN`,
  GET_OFFERS: `GET_OFFERS`,
};

// Объект начального состояния(state):
const initialState = {
  active: `mainPages`,
  cardId: null,
  town: `Amsterdam !`,
  placesCount: 121,
  offers: mockSettings
};

//     Редьюсер. Функция-редьюсер принимает в качестве параметров текущий state и действие (action).
//     Результатом выполнение редьюсера станет новое состояние.
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
      });
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        offers: `я хз что сюда передавать и когда`,
      });
  }
  return state;
};

const ActionActive = {
  activeState: () => ({
    active: ActionType.GET_OFFERS,
  })
};

export {
  reducer,
  ActionType,
  ActionActive,
};
