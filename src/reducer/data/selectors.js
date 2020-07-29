import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getFilterOffersOnCity} from '../../utils';

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

const getDataStatus = (state) => {
  return state[NameSpace.DATA].isDataLoaded;
};
const getPlaceCount = (state) => {
  return state[NameSpace.DATA].placesCount;
};
const getErrorMessage = (state) => {
  return state[NameSpace.DATA].errorMessage;
};

export {
  getOffersByActiveCity,
  getDataStatus,
  getActiveTown,
  getPlaceCount,
  getErrorMessage
};
