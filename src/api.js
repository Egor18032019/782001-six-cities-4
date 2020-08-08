import axios from "axios";
import {AppRoute} from "./const.js";
import history from "./history.js";
const Error = {
  INVALID_LOGIN: 400,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 404,
  NO_INTERNET: `Network Error`,
  BAD_TIMEOUT: `timeout of 5000ms exceeded`,
};

// опишите функцию, принимающую dispatch-еры в качестве параметра и возвращающую сконфигурированный инстанс axios
export const createAPI = (onUnauthorized, onBadRequest) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
    // Запросы должны предоставлять доступ к кукам. В случае, если запросы отправляются через axios, должен быть проставлен параметр withCredentials: true.
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.message === Error.NO_INTERNET || Error.BAD_TIMEOUT) {
      onBadRequest(err.message);
      throw err;
      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
    } else if (err.response.status === Error.UNAUTHORIZED) {
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      history.push(AppRoute.LOGIN);
      throw err;
    } else if (err.response.status === Error.INVALID_LOGIN) {
      onUnauthorized(err.response.status);
      throw err;
    } else if (err.response.status === Error.BAD_REQUEST) {
      onBadRequest(err);
      throw err;
    }
    throw err;

  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
