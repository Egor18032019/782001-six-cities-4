import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";

import Main from "../Main/main.jsx";
import Property from "../property/property.jsx";

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
    const {placesCount, town, mockSettings} = this.props;
    const {active} = this.state;
    if (active === `mainPages` || active === false) {
      return (
        <Main
          placesCount={placesCount}
          town={town}
          places={mockSettings}
          onMainTitleClick={this.handlerClickOnTitle}
        />
      );
    } else {
      return (
        <Property
        // написать фунцию которая будет перебирать массив mockSettings и искать там нужный id
          place={mockSettings[this.state.cardId]}
        />
      );
    }
  }

  handlerClickOnTitle(place) {
    // console.log(place.id);
    // console.log(`я нажал на заголовок`);
    this.setState({
      active: `property`,
      cardId: place.id
    });
  }


  render() {
    const {mockSettings} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/property">
            <Property
              place={mockSettings[0]}
            />
          </Route>
        </Switch>
      </BrowserRouter >
    );

  }
}

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  town: PropTypes.string.isRequired,
  // в массиве дополнительно надо указывть PropTypes элемента(чему равен каждый элемент массива- строка или число и т.п.)
  // typePlaces: PropTypes.arrayOf(PropTypes.string).isRequired,
  mockSettings: PropTypes.array.isRequired,
};

export default App;
