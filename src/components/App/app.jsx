import React, {PureComponent} from "react";
import PropTypes, {bool} from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../Main/main.jsx";
import withMain from "../hocs/with-main/with-main.js";
import {getOffersByActiveCity, getDataStatus, getActiveTown, getPlaceCount} from "../../reducer/data/selectors.js";
import {getOffersActive, getCardId} from "../../reducer/offers/selectors.js";

const MainWrapped = withMain(Main);

import Property from "../property/property.jsx";
import {
  ActionActive,
} from "../../reducer/offers/offers-reducer.js";
import {
  ActionTown
} from "../../reducer/data/data-reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {handlerClickOnTitle, onCityNameClick, isDataLoaded, activeTown, placesCount, activeOffers, cardId, active} = this.props;
    // console.log(activeOffer);

    if (isDataLoaded) {
      if (active === `mainPages` || active === false) {
        return (
          <MainWrapped
            placesCount={placesCount}
            town={activeTown}
            places={activeOffers}
            onMainTitleClick={handlerClickOnTitle}
            onCityNameClick={onCityNameClick}
          />
        );
      } else {
        return (
          <Property
            place={activeOffers.find((offer) => {
              return offer.id === cardId;
            })}
          />
        );
      }
    } else {
      return (
        <div className="error" style={{height: `100%`, width: `50%`, paddingTop: `300px`, margin: `auto`, color: `red
        `}}>
          <p className="error__message">Ошибка загрузки страницы</p>
          <button className="error__button">Попробовать снова</button>
          {/*
    как бы к этой кнопке прикрутить обновление странцы ??
    -- Максим получиться ??
     */}
        </div>
      );
    }
  }

  render() {
    const {activeOffers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              place={activeOffers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlerClickOnTitle(place) {
    dispatch(ActionActive.activeState(place));
  },
  onCityNameClick(city) {
    dispatch(ActionTown.changeCity(city));
  },
});

const mapStateToProps = (store) => {
  return ({
    isDataLoaded: getDataStatus(store),
    activeOffers: getOffersByActiveCity(store),
    activeTown: getActiveTown(store),
    placesCount: getPlaceCount(store),
    cardId: getCardId(store),
    active: getOffersActive(store),
  });
};

App.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  handlerClickOnTitle: PropTypes.func.isRequired,
  isDataLoaded: bool.isRequired,
  activeTown: PropTypes.string.isRequired,
  placesCount: PropTypes.number.isRequired,
  activeOffers: PropTypes.array.isRequired,
  active: PropTypes.string.isRequired,
  cardId: PropTypes.number,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App); // первым стате а вторым диспатчеры
