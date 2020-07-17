import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getFilterOffersOnCity} from '../../utils';

const getOffers = (state) => {
  return state.data;
};
const getActiveTown = (state) => {
  return state.town;
};

const getOffersByActiveCity = createSelector(
    getOffers,
    getActiveTown,
    (offers, activeTown) => {
      return getFilterOffersOnCity(offers, activeTown);
    }
);

export {
  getOffersByActiveCity
};
