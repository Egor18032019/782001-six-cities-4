import {
  AppRoute
} from "../../const.js";
import history from "../../history";

// Определяем действия(actions)
const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  AUTHORIZATION: `AUTHORIZATION`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

// Объект начального состояния(state):
const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  users: ``,
  usersErrorMessage: ``
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        usersErrorMessage: action.usersErrorMessage,
        users: ``
      });
    case ActionType.AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: AuthorizationStatus.AUTH,
        users: action.users,
        usersErrorMessage: ``
      });
    default:
      return state;
  }
};

// запрос на сервер
const Operation = {
  checkStatusAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuthData(response.data.email));
      })
      .catch((err) => {
        // dispatch(setAuthStatus(AuthorizationStatus.NO_AUTH, err)); // ,?? Максим тут надо так делать?
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
    .then((response) => {
      dispatch(ActionCreator.setAuthData(response.data.email));
      history.push(AppRoute.ROOT);
    })
    .catch((err) => {
      throw err;
    });
  }
};
const ActionCreator = {
  // этот сработал когда пришла ошибка
  setAuthStatus: (err) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      usersErrorMessage: `Ошибка ${err}`,
    };
  },
  //  этот срабатывает когда всё хорошо
  setAuthData: (data) => {
    return {
      type: ActionType.AUTHORIZATION,
      users: data
    };
  },
};
export {
  usersReducer,
  ActionType,
  Operation,
  AuthorizationStatus,
  ActionCreator
};
