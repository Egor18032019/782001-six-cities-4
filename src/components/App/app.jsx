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
    console.log(this.props);
    const {store, handlerClickOnTitle, onCityNameClick} = this.props;
    let storeState = store.getState();
    // console.log(storeState.cardId);

    if (storeState.active === `mainPages` || storeState.active === false) {
      return (
        <Main
          placesCount={storeState.placesCount}
          town={storeState.town}
          places={storeState.offers}
          onMainTitleClick={handlerClickOnTitle}
          onCityNameClick={onCityNameClick}
        />
      );
    } else {
      return (
        <Property
          // написать фунцию которая будет перебирать массив mockSettings и искать там нужный id
          // storeState.offers.find((offer) => offer.id === storeState.cardId),
          place={storeState.offers[storeState.cardId]}
        />
      );
    }
  }

  render() {
    const {store} = this.props;
    let storeState = store.getState();
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              place={storeState.offers[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter >
    );

  }
}
const mapDispatchToTitle = (dispatch) => ({
  handlerClickOnTitle(place) {
    console.log(place.id); // / или неннужно его так выносить ? отсавить тут внутрений state ?
    dispatch(ActionActive.activeState(place));
  }
});

const mapDispatchToTowns = (dispatch) => ({
  onCityNameClick(city) {
    console.log(city);
    dispatch(ActionTown.changeCity(city));
    dispatch(ActionTown.getOffers(city));
  }
});


// const mapStateToProps = (state) => ({
// });

App.propTypes = {
  handlerClickOnTitle: PropTypes.func,
  onCityNameClick: PropTypes.func.isRequired,
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
  }).isRequired
};

export {App};
export default connect(mapDispatchToTitle, mapDispatchToTowns)(App);
