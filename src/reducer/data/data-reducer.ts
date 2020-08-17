// reducer которые доставляет только данные
import {
  adapter
} from "../adapter/data.js";

import {getFiletReviews} from '../../utils.js';

// Определяем действия(actions)
const ActionType = {
  GET_SERVER_DATA: `GET_SERVER_DATA`,
  GET_SERVER_STATUS: `GET_SERVER_STATUS`,
  CHANGE_TOWN: `CHANGE_TOWN`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  ADD_FAVORITE_OFFERS: `ADD_FAVORITE_OFFERS`,
  LOAD_NEARBY_OFFERS: `LOAD_NEARBY_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
};

// Объект начального состояния(state):
const initialState = {
  data: [],
  isDataLoaded: false,
  town: `Amsterdam`,
  errorMessage: ``,
  favoriteOffers: ``,
  nearbyOffers: [],
  isNearbyOffersLoading: false,
  reviews: [],
  isReviewsLoading: false
};

// запрос на сервер
const Operation:any = {
  loadDataAsync: () => (dispatch:any, getState:any, api:any) => {
    return api.get(`/hotels`)
      .then((response) => {
        // console.log(response);
        const serverDataOffers = adapter(response.data); // адаптер для пересборки данных
        dispatch(getDataOffers(serverDataOffers));
        dispatch(setIdDataLoaded(true,``));
      });
  },
  addToFavorite: (offer) => (dispatch:any, getState:any, api:any) => {
    const status = offer.isBookmark ? 0 : 1;
    return api.post(`/favorite/${offer.id}/${status}`, {})
      .then((response:any) => {
        if (response.status === 200) {
          dispatch(Operation.loadFavoriteOffers());
          // getFavoriteOffers перерисовка кнопки
          dispatch(getFavoriteOffers(offer));
        }
      });
  },
  loadFavoriteOffers: () => (dispatch:any, getState:any, api:any) => {
    return api.get(`/favorite`)
      .then((response) => {
        const favoriteDataOffers = adapter(response.data); // адаптер для пересборки данных
        dispatch(setFavoriteOffers(favoriteDataOffers));
      });
  },
  loadNearbyOffers: (id:string | number)=>(dispatch:any, getState:any, api:any)=>{
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const serverDataOffers = adapter(response.data); // адаптер для пересборки данных
        dispatch(loadNearbyOffers(serverDataOffers));
      });

  },
  loadReviews: (id:string | number)=>(dispatch:any, getState:any, api:any)=>{
    return api.get(`/comments/${id}`)
    .then((response) => {
      dispatch(loadReviews(response.data));
    });

  },
  uploadReviews: (rating, review:string, offerId) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`,
        {
          comment: review,
          rating
        }
    )
      .then((response) => {
        if (response.status === 200) {
          dispatch(Operation.loadReviews(offerId));
        }
      })
      .catch((error) => {
        throw error;
      });
  }

};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_SERVER_DATA:
      return Object.assign({}, state, {
        data: action.data,
      });
    case ActionType.CHANGE_TOWN:
      return Object.assign({}, state, {
        town: action.payload,
      });
    case ActionType.GET_SERVER_STATUS:
      return Object.assign({}, state, {
        isDataLoaded: action.isDataLoaded,
        errorMessage: action.errorMessage
      });
    case ActionType.ADD_FAVORITE_OFFERS:
      // Идея: в data ишем совпадающие по id элементы и заменяем их.
      let favoriteOffer = action.payload;
      let stateDataRewriteArray = [...state.data];
      let index = stateDataRewriteArray.findIndex((it) => it.id === favoriteOffer.id);
      stateDataRewriteArray[index].isBookmark = !stateDataRewriteArray[index].isBookmark;
      return Object.assign({}, state, {
        data: stateDataRewriteArray,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return Object.assign({}, state, {
        favoriteOffers: action.payload,
      });
    case ActionType.LOAD_NEARBY_OFFERS:
      return Object.assign({}, state, {
        nearbyOffers: action.payload,
        isNearbyOffersLoading: true
      });
    case ActionType.LOAD_REVIEWS:
      let reviewsParseData = action.payload.map((review) => getFiletReviews(review));
      return Object.assign({}, state, {
        reviews: reviewsParseData,
        isReviewsLoading: true
      });
    default:
      return state;
  }
  // return state;
};


const loadReviews = (coments) =>{
  return {
    type: ActionType.LOAD_REVIEWS,
    payload: coments
  };
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
const loadNearbyOffers = (nearbyOffers) => {
  return {
    type: ActionType.LOAD_NEARBY_OFFERS,
    payload: nearbyOffers
  };
};
/**
 * @param {status} status bool-ево значение.
 * @param {err} err ошибка.
 * @return{isDataLoaded} статус загрузки(позже за диспатчим его в загрузчик(по другому не придумал))
 */
const setIdDataLoaded = (status:boolean, err:string) => {
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
