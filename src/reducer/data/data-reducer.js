// reducer которые доставляет только данные
import {
  adapter
} from "../adapter/data.js";
import {
  getFilterOffersOnCity
} from '../../utils';

// Определяем действия(actions)
const ActionType = {
  GET_SERVER_DATA: `GET_SERVER_DATA`,
  GET_SERVER_STATUS: `GET_SERVER_STATUS`,
  CHANGE_TOWN: `CHANGE_TOWN`,
};

// Объект начального состояния(state):
const initialState = {
  data: [],
  isDataLoaded: false,
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
      dispatch(setIdDataLoaded(true));
    });

};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SERVER_DATA:
      return Object.assign({}, state, {
        data: action.data,
        offers: getFilterOffersOnCity(action.data, state.town),
        placesCount: getFilterOffersOnCity(action.data, state.town).length,
      });
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
        offers: getFilterOffersOnCity(state.data, action.payload),
        placesCount: getFilterOffersOnCity(state.data, action.payload).length
      });
    case ActionType.GET_SERVER_STATUS:
      return Object.assign({}, state, {
        isDataLoaded: action.isDataLoaded
      });
    default:
      return state;
  }
  // return state;
};

/**
 * @param {status} status bool-ево значение.
 * @return{isDataLoaded} статус загрузки(позже за диспатчим его в загрузчик(по другому не придумал))
 */
const setIdDataLoaded = (status) => {
  return {
    type: ActionType.GET_SERVER_STATUS,
    isDataLoaded: status
  };
};

const getDataOffers = (data) => {
  return {
    type: ActionType.GET_SERVER_DATA,
    data,
  };
};
/**
 * @return{*} меняет в сторе town на выбранный
 */
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
  ActionTown,
  setIdDataLoaded
};
