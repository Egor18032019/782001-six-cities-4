import React, {PureComponent} from "react";
import PropTypes, {bool} from "prop-types";
import {Switch, Route, Router, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Notifications, {notify} from 'react-notify-toast';
import Main from "../Main/main.jsx";
import withMain from "../hocs/with-main/with-main.js";
import {getOffersByActiveCity, getDataStatus, getActiveTown, getPlaceCount, getErrorMessage} from "../../reducer/data/selectors.js";
import {getOffersActive, getCardId} from "../../reducer/offers/selectors.js";
import {getAuthStatus, getEmail, getUsersErrorMessage} from "../../reducer/user/selectors.js";
import {AuthorizationStatus, Operation} from "../../reducer/user/user-reducer.js";
import history from "../../history";
const MainWrapped = withMain(Main);

import Property from "../property/property.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import {
  ActionActive,
} from "../../reducer/offers/offers-reducer.js";
import {
  ActionTown
} from "../../reducer/data/data-reducer.js";
import {
  AppRoute
} from "../../const.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {onMainTitleClick, onCityNameClick, activeTown, placesCount, activeOffers, cardId,
      active, authorizationStatus, email, usersErrorMessage} = this.props;
    // убрал отображение по статусу загрузки и статусу авторизации
    if (active === `mainPages`) {
      return (
        <MainWrapped
          placesCount={placesCount}
          town={activeTown}
          places={activeOffers}
          onMainTitleClick={onMainTitleClick}
          onCityNameClick={onCityNameClick}
          email={email}
          authorizationStatus={authorizationStatus}
        />
      );
    } else if (active === `property`) {
      return (
        <Property
          place={activeOffers.find((offer) => {
            return offer.id === cardId;
          })}
        />
      );
    } else if (usersErrorMessage && authorizationStatus === AuthorizationStatus.NO_AUTH) {
      // eslint-disable-next-line no-alert
      alert(`Проверьте введеные даные`);
    }

    return `что то пошло не так`;
  }

  render() {
    const {onMainTitleClick, onCityNameClick, activeTown, placesCount, activeOffers,
      authorizationStatus, email, onLoginUsers, cardId, active, errorMessage} = this.props;
    let status = (errorMessage ? notify.show(`${errorMessage}`, `error`) : ``);
    return (
      <Router
        history={history}>
        <Notifications />
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {status}
            {this._renderApp()}
          </Route>
          <Route exact path={AppRoute.MAIN}>
            {status}
            <MainWrapped
              placesCount={placesCount}
              town={activeTown}
              places={activeOffers}
              onMainTitleClick={onMainTitleClick}
              onCityNameClick={onCityNameClick}
              email={email}
              authorizationStatus={authorizationStatus}
            />
          </Route>
          <Route exact path={AppRoute.PROPERTY}>
            {active === `mainPages` ? <Redirect to={AppRoute.MAIN}/> :
              <Property
                place={activeOffers.find((offer) => {
                  return offer.id === cardId;
                })}
              />}
            {status}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            {status}
            <SignIn
              onLoginUsers={onLoginUsers}
              activeTown={activeTown}
            />
          </Route>
          <Route exact path={AppRoute.FAVORITES}>
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
    dispatch(Operation.login(authData));
  }
});

const mapStateToProps = (store) => {
  return ({
    isDataLoaded: getDataStatus(store),
    activeOffers: getOffersByActiveCity(store),
    activeTown: getActiveTown(store),
    placesCount: getPlaceCount(store),
    cardId: getCardId(store),
    active: getOffersActive(store),
    authorizationStatus: getAuthStatus(store),
    email: getEmail(store),
    errorMessage: getErrorMessage(store),
    usersErrorMessage: getUsersErrorMessage(store),
  });
};

App.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  isDataLoaded: bool.isRequired,
  activeTown: PropTypes.string.isRequired,
  placesCount: PropTypes.number.isRequired,
  activeOffers: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  cardId: PropTypes.number,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  usersErrorMessage: PropTypes.string,
  errorMessage: PropTypes.string,
  onLoginUsers: PropTypes.func.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App); // первым стате а вторым диспатчеры


// TODO: Удалите логику рендера компонента «Главная страница»,
// когда по значению аuthorizationStatus равному NO_AUTH рендерится компонент «Sign In».
//  Теперь оба эти компонента должны рендериться только каждый по своему маршруту.
