import axios from "axios";

const Error = {
  UNAUTHORIZED: 401,
  BAD_REQUEST: 404
};

// опишите функцию, принимающую dispatch в качестве параметра и возвращающую сконфигурированный инстанс axios
export const createAPI = (onDispatcher, onBadRequest) => {
  const api = axios.create({
    baseURL: `https://4.react.pages.academy/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onDispatcher();

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
