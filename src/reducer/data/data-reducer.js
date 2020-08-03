// reducer которые доставляет только данные
import {
  adapter
} from "../adapter/data.js";
import {
  getFilterOffersOnCity
} from '../../utils';
import {notify} from 'react-notify-toast';

// Определяем действия(actions)
const ActionType = {
  GET_SERVER_DATA: `GET_SERVER_DATA`,
  GET_SERVER_STATUS: `GET_SERVER_STATUS`,
  CHANGE_TOWN: `CHANGE_TOWN`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  ADD_FAVORITE_OFFERS: `ADD_FAVORITE_OFFERS`,
};

// Объект начального состояния(state):
const initialState = {
  data: [],
  isDataLoaded: false,
  placesCount: 0,
  town: `Amsterdam`,
  errorMessage: ``,
  favoriteOffers: ``
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
    const status = offer.isBookmark ? 0 : 1;
    return api.post(`/favorite/${offer.id}/${status}`, {})
      .then((response) => {
        if (response.status === 200) {
          dispatch(Operation.loadFavoriteOffers(offer));
        } else {
          notify.show(`Плохое соединение`, `warning`, `orange`);
        }
      });
  },
  loadFavoriteOffers: (offer) => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteDataOffers = adapter(response.data); // адаптер для пересборки данных
        dispatch(setFavoriteOffers(favoriteDataOffers));
        // добавить второй актион который будет менять
        dispatch(getFavoriteOffers(offer));
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
    case ActionType.ADD_FAVORITE_OFFERS:
      // Идея: в data ишем совпадающие по id элементы и заменяем их.
      let favoriteOffer = action.payload;
      let Array = state.data;
      let index = Array.findIndex((it) => it.id === favoriteOffer.id);
      Array[index].isBookmark = !Array[index].isBookmark;
      return Object.assign({}, state, {
        data: Array,
      });
      // Плохо: тормозит при отрисовки.
    case ActionType.LOAD_FAVORITE_OFFERS:
      return Object.assign({}, state, {
        favoriteOffers: action.payload,
      });
    default:
      return state;
  }
  // return state;
};


const getFavoriteOffers = (offer) => {
  return {
    type: ActionType.ADD_FAVORITE_OFFERS,
    payload: offer
  };
};
const setFavoriteOffers = (favoriteOffers) => {
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
