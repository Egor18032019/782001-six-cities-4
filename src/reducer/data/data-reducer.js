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
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
};

// Объект начального состояния(state):
const initialState = {
  data: [],
  isDataLoaded: false,
  placesCount: 0,
  town: `Amsterdam`,
  errorMessage: ``
};

// запрос на сервер
const Operation = {
  loadDataAsync: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        // console.log(response);
        const serverDataOffers = adapter(response.data); // адаптер для пересборки данных
        dispatch(getDataOffers(serverDataOffers));
        dispatch(setIdDataLoaded(true));
      });
  },
  addToFavorite: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/${+!offer.isBookmark}`, {})
      .then((response) => {
        dispatch(Operation.loadFavoriteOffers());
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteDataOffers = adapter(response.data); // адаптер для пересборки данных
        dispatch(addFavoriteOffers(favoriteDataOffers));
      });
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SERVER_DATA:
      return Object.assign({}, state, {
        data: action.data,
        placesCount: getFilterOffersOnCity(action.data, state.town).length,
      });
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
        placesCount: getFilterOffersOnCity(state.data, action.payload).length
      });
    case ActionType.GET_SERVER_STATUS:
      return Object.assign({}, state, {
        isDataLoaded: action.isDataLoaded,
        errorMessage: action.errorMessage
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      let favoriteOffers = action.payload;
      // в data ишем совпадающие по id элементы и заменяем их.
      let lastOffer = favoriteOffers[favoriteOffers.length - 1];
      // что бы каждый раз не сравнивать массивы -> ищем по последнему элемнту и меняем его
      let index = state.data.findIndex((it) => it.id === lastOffer.id);
      console.log(state.data[index]);
      let newDate = state.data.splice(index, 1, lastOffer);
      return Object.assign({}, state, {
        data: newDate,
      });
    default:
      return state;
  }
  // return state;
};


const addFavoriteOffers = (favoriteOffers) => {
  return {
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: favoriteOffers
  };
};

/**
 * @param {status} status bool-ево значение.
 * @param {err} err ошибка.
 * @return{isDataLoaded} статус загрузки(позже за диспатчим его в загрузчик(по другому не придумал))
 */
const setIdDataLoaded = (status, err) => {
  return {
    type: ActionType.GET_SERVER_STATUS,
    isDataLoaded: status,
    errorMessage: err
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
  Operation,
  ActionTown,
  setIdDataLoaded
};
