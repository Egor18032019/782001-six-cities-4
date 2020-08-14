import React from "react";
import PropTypes, {bool} from "prop-types";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../Main/main.jsx";
import withMain from "../hocs/with-main/with-main.js";
import {
  getOffersByActiveCity, getDataStatus, getActiveTown, getPlaceCount, getErrorMessage,
  getFavoritesOffers, getList} from "../../reducer/data/selectors.js";
import {getAuthStatus, getEmail, getUsersErrorMessage} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, Operation as UserOperation} from "../../reducer/user/user-reducer.js";
import {Operation as DataOperation} from "../../reducer/data/data-reducer.js";
import {ActionTown} from "../../reducer/data/data-reducer.js";
import history from "../../history";
const MainWrapped = withMain(Main);

import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {AppRoute} from "../../const.js";
import withPrivateRoute from "../hocs/with-private-route/with-private-route.js";
const FavoritesPagePrivate = withPrivateRoute(Favorites, AppRoute.LOGIN);

const App = (props)=> {

  const {onCityNameClick, activeTown, placesCount, activeOffers,
    authorizationStatus, email, onLoginUsers, cardId,
    onFavoriteButtonClick, cityList, isDataLoaded} = props;
  const isAuthorizationStatus = (authorizationStatus === AuthorizationStatus.AUTH);
  return (
    <Router
      history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainWrapped
            placesCount={placesCount}
            town={activeTown}
            cityList={cityList}
            places={activeOffers}
            email={email}
            authorizationStatus={authorizationStatus}
            onCityNameClick={onCityNameClick}
            onFavoriteButtonClick={onFavoriteButtonClick}
          />
        </Route>
        <Route exact path={AppRoute.PROPERTY}
          render={(routeProps) => {
            if (isDataLoaded) {
              return (
                <Property
                  place={cardId}
                  choiseId={routeProps.match.params.id}
                  email={email}
                  authorizationStatus={authorizationStatus}
                  onFavoriteButtonClick={onFavoriteButtonClick}
                />);
            }
            return (`Подождите. Идет загрузка`);
          }}>
        </Route>
        <Route exact path={AppRoute.LOGIN}
          render = {()=>{
            if (isAuthorizationStatus) {
              return <Redirect to={AppRoute.ROOT} />;
            }
            return (<SignIn
              onLoginUsers={onLoginUsers}
              activeTown={activeTown}
              email={email}
              authorizationStatus={authorizationStatus}
            />);
          }}>
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPagePrivate
            email={email}
            cityList={cityList}
            authorizationStatus={authorizationStatus}
            onFavoriteButtonClick={onFavoriteButtonClick}
          />
        </Route>
      </Switch>
    </Router >
  );
};


const mapDispatchToProps = (dispatch) => ({
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
