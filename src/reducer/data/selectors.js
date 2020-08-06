import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getFilterOffersOnCity} from '../../utils';
import {getCardId} from "../../reducer/offers/selectors.js";

const getOffers = (state) => {
  return state[NameSpace.DATA].data;
};

const getActiveTown = (state) => {
  return state[NameSpace.DATA].town;
};

const getOffersByActiveCity = createSelector(
    getOffers,
    getActiveTown,
    (offers, activeTown) => {
      return getFilterOffersOnCity(offers, activeTown);
    }
);


// вытаскиваем города из пришедшего массива
const getList = createSelector(
    getOffers,
    (offers) => {
      // и делаем уникальный массив
      return [...new Set(offers.map((offer) => offer.city))];
    }
);


const getDataStatus = (state) => {
  return state[NameSpace.DATA].isDataLoaded;
};
const getPlaceCount = (state) => {
  return getOffersByActiveCity(state).length;
};
const getErrorMessage = (state) => {
  return state[NameSpace.DATA].errorMessage;
};
const getFavoritesOffers = (state) => {
  return state[NameSpace.DATA].favoriteOffers;
};

export {
  getOffersByActiveCity,
  getDataStatus,
  getActiveTown,
  getPlaceCount,
  getErrorMessage,
  getFavoritesOffers,
  getList,
};
