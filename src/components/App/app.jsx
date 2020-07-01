import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import Main from "../Main/main.jsx";
import Property from "../property/property.jsx";
import {
  ActionActive
} from "../../reducer.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: `mainPages`,
      cardId: null
    };

    // this.handlerClickOnTitle = this.handlerClickOnTitle.bind(this);
  }

  _renderApp() {
    const {store, handlerClickOnTitle, city, offersList} = this.props;
    let storeState = store.getState();
    console.log(city);
    console.log(storeState.cardId);

    if (storeState.active === `mainPages` || storeState.active === false) {
      return (
        <Main
          placesCount={storeState.placesCount}
          town={storeState.town}
          places={storeState.offers}
          onMainTitleClick={handlerClickOnTitle}
        />
      );
    } else {
      return (
        <Property
          // написать фунцию которая будет перебирать массив mockSettings и искать там нужный id
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
    console.log(place.id);
    dispatch(ActionActive.activeState(place));
  },
});

const mapStateToProps = (state) => ({
  city: state.town,
  offersList: state.offers,
});

App.propTypes = {
  handlerClickOnTitle: PropTypes.func.isRequired,
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
  }).isRequired
};

export {App};
export default connect(mapDispatchToTitle, mapStateToProps)(App);
