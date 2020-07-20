import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 404
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
    const {response} = err;
    // console.log(err);
    // console.log(response);
    // -,,,,,,,,,????????????  максим почему тут не работает ??
    // -- ??? когда нет инета в консоли пишет ошибку
    // TypeError: can't access property "status", response is undefined
    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();

      // Бросаем ошибку, потому что нам важно прервать цепочку промисов после запроса авторизации.
      // Запрос авторизации - это особый случай и важно дать понять приложению, что запрос был неудачным.
      throw err;
    } else if (response.status === Error.BAD_REQUEST) {
      onBadRequest(err);
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
