type functn = () => {}
type noop = () => void

interface AppProps {
  onCityNameClick: functn,
  onFavoriteButtonClick: functn,
  onLoginUsers: functn,
  isDataLoaded: boolean,
  activeTown: string,
  placesCount: number,
  activeOffers: {}[],
  cardId: object, // или ноль или обьект
  authorizationStatus: string,
  email: string,
  usersErrorMessage: any,
  errorMessage: string,
  cityList: string[],
};

export {
  AppProps,
  functn,
  noop,
}
