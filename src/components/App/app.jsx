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

    this.handlerClickOnTitle = this.handlerClickOnTitle.bind(this);
  }

  _renderApp() {
    const {store} = this.props;
    let storeState = store.getState();
    console.log(store);

    if (storeState.active === `mainPages` || storeState.active === false) {
      return (
        <Main
          placesCount={storeState.placesCount}
          town={storeState.town}
          places={storeState.offers}
          onMainTitleClick={this.handlerClickOnTitle}
        />
      );
    } else {
      return (
        <Property
          // написать фунцию которая будет перебирать массив mockSettings и искать там нужный id
          place={storeState.offers[this.state.cardId]}
        />
      );
    }
  }

  handlerClickOnTitle(dispatch) {
    dispatch(ActionActive.activeState());
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
const mapStateToTitle = (dispatch) => ({
  handlerClickOnTitle() {
    dispatch(ActionActive.activeState());
  },
});


App.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
  }).isRequired
};

export {App};
export default connect(mapStateToTitle)(App);
