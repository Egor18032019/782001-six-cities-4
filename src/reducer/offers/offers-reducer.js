
// Определяем действия(actions)
const ActionType = {
  GET_OFFERS: `GET_OFFERS`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  ADD_TO_FAVORITE: `ADD_TO_FAVORITE`,
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
    // case ActionType.LOAD_FAVORITE_OFFERS:
    //   return Object.assign({}, state, {
    //     active: `property`,
    //     cardId: action.cardId,
    //   });
    // case ActionType.ADD_TO_FAVORITE:
    //   return Object.assign({}, state, {
    //     active: `property`,
    //     cardId: action.cardId,
    //   });
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
  loadFavoriteOffers: (place) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS, // обязательно поле type так как по нему пробегамся swit-чом
    cardId: place.id,
  }),
  addToFavorite: (place) => ({
    type: ActionType.ADD_TO_FAVORITE, // обязательно поле type так как по нему пробегамся swit-чом
    cardId: place.id,
  })
};

// запрос на сервер
const Operation = {

  addToFavorite: (offer) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offer.id}/${+!offer.isBookmark}`, {})
      .then((response) => {
        dispatch(Operation.loadFavoriteOffers());
        // dispatch(ActionActive.addToFavorite(response.data));
      });
  },
  loadFavoriteOffers: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        console.log(response);
        dispatch(ActionActive.loadFavoriteOffers(response.data));
      });
  },
};

export {
  offersReducer,
  ActionType,
  ActionActive,
  Operation
};
