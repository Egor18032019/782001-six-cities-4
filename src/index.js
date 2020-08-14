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
  Operation as DataOperation
} from "./reducer/data/data-reducer.js";
import {
  Operation as UserOperation
} from "./reducer/user/user-reducer.js";
import {
  ActionCreator
} from "./reducer/user/user-reducer.js";
import {AppRoute} from "./const.js";
import history from "./history.js";

const onUnauthorized = (status) => {
  store.dispatch(ActionCreator.setAuthStatus(status));
  history.push(AppRoute.LOGIN);
  // Воспользуйтесь механизмом перехватчиков (interceptors) пакета axios
  //  и реализуйте с их помощью следующее поведение: при получении ответа от сервера с кодом 401,
  //  выполните редирект на страницу аутентификации (/login). Это нам потребуется для того,
  //  чтобы неавторизованный пользователь не мог добавить в избранное жилье по клику на иконку-закладки.
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
store.dispatch(DataOperation.loadDataAsync());
store.dispatch(UserOperation.checkStatusAuth());
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
