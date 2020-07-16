import {createSelector} from "reselect";
import NameSpace from "../name-space.js";
import {getFilterOffersOnCity} from '../../utils';

const getOffers = (state) => {
  console.log(state);
  return state[NameSpace.DATA].data;
};
const getActiveTown = (state) => {
  return state[NameSpace.OFFERS].town;
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
