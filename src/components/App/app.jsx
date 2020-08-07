import React, {PureComponent} from "react";
import PropTypes, {bool} from "prop-types";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Notifications, {notify} from 'react-notify-toast';
import Main from "../Main/main.jsx";
import withMain from "../hocs/with-main/with-main.js";
import {
  getOffersByActiveCity, getDataStatus, getActiveTown, getPlaceCount, getErrorMessage,
  getFavoritesOffers, getList
} from "../../reducer/data/selectors.js";
import {getCardId} from "../../reducer/offers/selectors.js";
import {getAuthStatus, getEmail, getUsersErrorMessage} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user-reducer.js";
import {Operation as DataOperation} from "../../reducer/data/data-reducer.js";
import history from "../../history";
const MainWrapped = withMain(Main);

import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {ActionActive} from "../../reducer/offers/offers-reducer.js";
import {ActionTown} from "../../reducer/data/data-reducer.js";
import {AppRoute} from "../../const.js";
import withPrivateRoute from "../hocs/with-private-route/with-private-route.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onMainTitleClick, onCityNameClick, activeTown, placesCount, activeOffers,
      authorizationStatus, email, onLoginUsers, cardId, errorMessage, usersErrorMessage, onFavoriteButtonClick, cityList} = this.props;
    const status = (errorMessage ? notify.show(`${errorMessage}`, `error`) : ``);
    const myColor = {background: `#0E1717`, text: `orange`};
    const statusUser = (usersErrorMessage ? notify.show(`Проверьте введеные данные  ${usersErrorMessage}`, `custom`, 2500, myColor) : ``);
    const isAuthorizationStatus = (authorizationStatus === AuthorizationStatus.AUTH);
    const FavoritesPagePrivate = withPrivateRoute(Favorites, isAuthorizationStatus, AppRoute.LOGIN);

    return (
      <Router
        history={history}>
        <Notifications />
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {status}
            <MainWrapped
              placesCount={placesCount}
              town={activeTown}
              cityList={cityList}
              places={activeOffers}
              onMainTitleClick={onMainTitleClick}
              onCityNameClick={onCityNameClick}
              email={email}
              authorizationStatus={authorizationStatus}
              onFavoriteButtonClick={onFavoriteButtonClick}
            />
          </Route>
          <Route exact path={AppRoute.PROPERTY}>
            {!cardId ? <Redirect to={AppRoute.ROOT} /> :
              <Property
                place={cardId}
                email={email}
                authorizationStatus={authorizationStatus}
                onFavoriteButtonClick={onFavoriteButtonClick}
              />}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            {isAuthorizationStatus ? <Redirect to={AppRoute.ROOT} /> :
              <SignIn
                onLoginUsers={onLoginUsers}
                activeTown={activeTown}
                email={email}
                authorizationStatus={authorizationStatus}
              />}
            {statusUser}
            {status}
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
            <FavoritesPagePrivate
              email={email}
              authorizationStatus={authorizationStatus}
              cityList={cityList}
              isAuthorizationStatus={isAuthorizationStatus}
            />
          </Route>
        </Switch>
      </Router >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onMainTitleClick(place) {
    dispatch(ActionActive.activeState(place));
  },
  onCityNameClick(city) {
    dispatch(ActionTown.changeCity(city));
  },
  onLoginUsers(authData) {
    dispatch(UserOperation.login(authData));
  },
  onFavoriteButtonClick(place) {
    dispatch(DataOperation.addToFavorite(place));
  }
});

const mapStateToProps = (store) => {
  return ({
    isDataLoaded: getDataStatus(store),
    activeOffers: getOffersByActiveCity(store),
    activeTown: getActiveTown(store),
    placesCount: getPlaceCount(store),
    cardId: getCardId(store),
    authorizationStatus: getAuthStatus(store),
    email: getEmail(store),
    errorMessage: getErrorMessage(store),
    usersErrorMessage: getUsersErrorMessage(store),
    favoriteOffers: getFavoritesOffers(store),
    cityList: getList(store),
  });
};

App.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  isDataLoaded: bool.isRequired,
  activeTown: PropTypes.string.isRequired,
  placesCount: PropTypes.number.isRequired,
  activeOffers: PropTypes.array.isRequired,
  cardId: PropTypes.object, // или ноль или обьект
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  usersErrorMessage: PropTypes.any,
  errorMessage: PropTypes.string,
  onLoginUsers: PropTypes.func.isRequired,
  cityList: PropTypes.array.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App); // первым стате а вторым диспатчеры


// TODO: Удалите логику рендера компонента «Главная страница»,
// когда по значению аuthorizationStatus равному NO_AUTH рендерится компонент «Sign In».
//  Теперь оба эти компонента должны рендериться только каждый по своему маршруту.
