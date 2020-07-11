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
} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {store, handlerClickOnTitle, onCityNameClick} = this.props;

    if (store.active === `mainPages` || store.active === false) {
      return (
        <MainWrapped
          placesCount={store.placesCount}
          town={store.town}
          places={store.offers}
          onMainTitleClick={handlerClickOnTitle}
          onCityNameClick={onCityNameClick}
        />
      );
    } else {
      return (
        <Property
          place={store.offers.find((offer) => {
            return offer.id === store.cardId;
          })}
        />
      );
    }
  }

  render() {
    const {store} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              place={store.offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlerClickOnTitle(place) {
    // console.log(place.id); // / или неннужно его так выносить ? отставить тут внутрений state ?
    dispatch(ActionActive.activeState(place));
  },
  onCityNameClick(city) {
    dispatch(ActionTown.changeCity(city));
  }
});

const mapStateToProps = (store) => {
  // console.log(`state:`, state);
  return {
    store
  };
};

App.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  handlerClickOnTitle: PropTypes.func.isRequired,
  store: PropTypes.shape({
    active: PropTypes.string.isRequired,
    cardId: PropTypes.number,
    town: PropTypes.string.isRequired,
    placesCount: PropTypes.number.isRequired,
    offers: PropTypes.array.isRequired,
  }).isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App); // первым стате а вторым фдиспатчеры
