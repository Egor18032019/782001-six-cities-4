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

let filterOnCity = (town) => {
  return mockSettings.filter((element) => element.city === town);
};

// Объект начального состояния(state):
const initialState = {
  active: `mainPages`,
  cardId: null,
  town: `Amsterdam`,
  placesCount: 121,
  // offers: mockSettings.filter((element) => element.city === this.initialState.town)  ----
  // ,,,,????  почему так не работает ?
  offers: mockSettings,
  // offers: filterOnCity(initialState.town) -- и так не работает
};


console.log(filterOnCity(`Amsterdam`));

// TODO: написать функцию сортировки -> сортируте массив offers по town и записывает


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
        cardId: action.cardId
      });
  }
  return state;
};

const ActionActive = {
  activeState: (place) => ({
    active: ActionType.GET_OFFERS,
    cardId: place.id
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
