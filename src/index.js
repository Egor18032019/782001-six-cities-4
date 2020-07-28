import React from "react";
import ReactDOM from "react-dom";
import {compose} from "recompose";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./components/App/app.jsx";
import {
  setIdDataLoaded
} from "./reducer/data/data-reducer.js";
import combineReducers from "./reducer/combineReducers.js";
import {
  createAPI
} from "./api.js";
import {
  loadDataAsync
} from "./reducer/data/data-reducer.js";
import {
  setAuthStatus
} from "./reducer/user/user-reducer.js";

const onUnauthorized = (status) => {
  store.dispatch(setAuthStatus(status));
};

const onBadRequest = (err) => {
  store.dispatch(setIdDataLoaded(false, err));
};

const api = createAPI(onUnauthorized, onBadRequest);

const store = createStore(
    combineReducers,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    ));

// диспатчим и вызываем функцию которая нам подгрузит данные
store.dispatch(loadDataAsync());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
