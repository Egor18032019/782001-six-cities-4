import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../Main/main.jsx";
import withMain from "../hocs/with-main/with-main.js";

const MainWrapped = withMain(Main);

import Property from "../property/property.jsx";
import {
  ActionActive, ActionTown
} from "../../reducer/offers/offers-reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {store, handlerClickOnTitle, onCityNameClick} = this.props;
    const {OFFERS, DATA} = store;
    if (OFFERS.active === `mainPages` || OFFERS.active === false) {
      return (
        <MainWrapped
          placesCount={DATA.placesCount}
          town={DATA.town}
          places={DATA.offers}
          onMainTitleClick={handlerClickOnTitle}
          onCityNameClick={onCityNameClick}
        />
      );
    } else {
      return (
        <Property
          place={DATA.offers.find((offer) => {
            return offer.id === OFFERS.cardId;
          })}
        />
      );
    }
  }

  render() {
    const {store} = this.props;
    const {DATA} = store;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              place={DATA.offers[0]}
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
    // console.log(city);
    dispatch(ActionTown.changeCity(city));
  },
  // offers: getOffersByActiveCity(OFFERS)
});

const mapStateToProps = (store) => {
  return {
    store,
  };
};

App.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  handlerClickOnTitle: PropTypes.func.isRequired,
  store: PropTypes.shape({
    DATA: PropTypes.shape({
      town: PropTypes.string.isRequired,
      placesCount: PropTypes.number.isRequired,
      offers: PropTypes.array.isRequired,
    }).isRequired,
    OFFERS: PropTypes.shape({
      active: PropTypes.string.isRequired,
      cardId: PropTypes.number,
    }).isRequired
  }).isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App); // первым стате а вторым фдиспатчеры
