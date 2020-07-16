import React from "react";
import ReactDOM from "react-dom";
import {compose} from "recompose";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import App from "./components/App/app.jsx";
import {
  reducer
} from "./reducer/reducer.js";
import {
  createAPI
} from "./api.js";
import {
  loadDataAsync
} from "./reducer/reducer.js";

const onUnauthorized = () => {
  store.dispatch();
};

const onBadRequest = (err) => {
  const fakealert = err + 1;
  store.dispatch();
};


const api = createAPI(onUnauthorized, onBadRequest);

const store = createStore(
    reducer,
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
