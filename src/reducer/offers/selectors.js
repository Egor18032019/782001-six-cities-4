import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const getOffersActive = (state) => {
  return state[NameSpace.OFFERS].active;
};
const getCardId = (state) => {
  return state[NameSpace.OFFERS].cardId;
};

export {
  getOffersActive,
  getCardId,
};
