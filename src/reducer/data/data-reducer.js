// reducer которые доставляет только данные
import {adapter} from "../adapter/data.js";
import {getFilterOffersOnCity} from '../../utils';


// Определяем действия(actions)
const ActionType = {
  GET_SERVER_DATA: `GET_SERVER_DATA`,
  CHANGE_TOWN: `CHANGE_TOWN`,
};

// Объект начального состояния(state):
const initialState = {
  data: [],
  offers: [],
  placesCount: 0,
  town: `Amsterdam`,
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
        data: action.data,
        offers: getFilterOffersOnCity(action.data, `Amsterdam`),
        placesCount: getFilterOffersOnCity(action.data, `Amsterdam`).length,
      });
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
        offers: getFilterOffersOnCity(state.data, action.payload),
        placesCount: getFilterOffersOnCity(state.data, action.payload).length
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

const ActionTown = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_TOWN,
    payload: city,
  }),
};


export {
  dataReducer,
  ActionType,
  loadDataAsync,
  ActionTown
};
