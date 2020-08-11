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
  LOAD: `LOAD`,
};

// Объект начального состояния(state):
const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  users: ``,
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: AuthorizationStatus.LOAD,
      });
    case ActionType.AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: AuthorizationStatus.AUTH,
        users: action.users,
      });
    default:
      return state;
  }
};

// запрос на сервер
const Operation = {
  checkStatusAuth: () => (dispatch, getState, api) => {
    dispatch(ActionCreator.setAuthStatus());
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.setAuthData(response.data.email));
      })
      .catch((err) => {
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
  setAuthStatus: () => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      users: ``
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
