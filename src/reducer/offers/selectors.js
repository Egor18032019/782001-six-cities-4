import NameSpace from "../name-space.js";

const getCardId = (state) => {
  return state[NameSpace.OFFERS].cardId;
};

export {
  getCardId,
};
