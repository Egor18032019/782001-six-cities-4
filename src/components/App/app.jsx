import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../Main/main.jsx";
import Property from "../property/property.jsx";
import {
  ActionActive, ActionTown
} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    // this.handlerClickOnTitle = this.handlerClickOnTitle.bind(this);
  }

  _renderApp() {
    const {state, handlerClickOnTitle, onCityNameClick} = this.props;

    if (state.active === `mainPages` || state.active === false) {
      return (
        <Main
          placesCount={state.placesCount}
          town={state.town}
          places={state.offers}
          onMainTitleClick={handlerClickOnTitle}
          onCityNameClick={onCityNameClick}
        />
      );
    } else {
      return (
        <Property
          place={state.offers.find((offer) => {
            return offer.id === state.cardId;
          })}
        />
      );
    }
  }

  render() {
    const {state} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              place={state.offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter >
    );
  }
}

const mapDispatchToTitle = (dispatch) => ({
  handlerClickOnTitle(place) {
    // console.log(place.id); // / или неннужно его так выносить ? отставить тут внутрений state ?
    dispatch(ActionActive.activeState(place));
  },
  onCityNameClick(city) {
    dispatch(ActionTown.changeCity(city));
  }
});

const mapStateToProps = (state) => {
  // console.log(`state:`, state);
  return {
    state
  };
};

App.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  handlerClickOnTitle: PropTypes.func.isRequired,
  state: PropTypes.shape({
    active: PropTypes.string.isRequired,
    cardId: PropTypes.number,
    town: PropTypes.string.isRequired,
    placesCount: PropTypes.number.isRequired,
    offers: PropTypes.array.isRequired,
  }).isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToTitle)(App); // первым стате а вторым фдиспатчеры
