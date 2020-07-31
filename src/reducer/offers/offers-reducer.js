
// Определяем действия(actions)
const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
};

// Объект начального состояния(state):
const initialState = {
  active: `mainPages`,
  cardId: null,
};


const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return Object.assign({}, state, {
        active: `property`,
        cardId: action.cardId,
      });
    default:
      return state;
  }
  // return state;
};

const ActionActive = {
  activeState: (place) => ({
    type: ActionType.GET_OFFERS, // обязательно поле type так как по нему пробегамся swit-чом
    cardId: place.id,
  }),
};

export {
  offersReducer,
  ActionType,
  ActionActive,
};
