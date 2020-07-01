import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/App/app.jsx";
import {
  mockSettings
} from "./mocks/offers.js";
import {
  reducer
} from "./reducer.js";

const Settings = {
  PLACES: 312,
  CITIES: `Amsterdam !`,
};


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App placesCount = {
        Settings.PLACES
      }
      store ={store}
      town = {
        Settings.CITIES
      }
      mockSettings = {
        mockSettings
      }
      />
    </Provider>,
    document.querySelector(`#root`)
);
