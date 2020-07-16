// reducer которые доставляет только данные
import {adapter} from "../adapter/data.js";


// Определяем действия(actions)
const ActionType = {
  GET_SERVER_DATA: `GET_SERVER_DATA`,
};

// Объект начального состояния(state):
const initialState = {
  data: []
};

// запрос на сервер
const loadDataAsync = () => (dispatch, getState, api) => {
  return api.get(`/hotels`)
    .then((response) => {
      const serverDataOffers = adapter(response.data); // адаптер для пересборки данных
      dispatch(getDataOffers(serverDataOffers));
    });
};


const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SERVER_DATA:
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
  // return state;
};


const getDataOffers = (data) => {
  return {
    type: ActionType.GET_SERVER_DATA,
    data,
  };
};


export {
  dataReducer,
  ActionType,
  loadDataAsync,
};
