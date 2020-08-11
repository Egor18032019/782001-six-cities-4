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
  authorizationStatus: AuthorizationStatus.LOAD,
  users: ``,
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
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
    return api.get(`/login`)
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.setAuthData(response.data.email));
        } else if (response.status === 400) {
          dispatch(ActionCreator.setAuthStatus(AuthorizationStatus.NO_AUTH));
        }
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
  setAuthStatus: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status
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
