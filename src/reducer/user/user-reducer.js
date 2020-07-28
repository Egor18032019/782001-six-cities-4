
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
  errorMessage: ``
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.authorizationStatus,
        usersErrorMessage: action.errorMessage
      });
    case ActionType.AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.authorizationStatus,
        users: action.users
      });
    default:
      return state;
  }
  // return state;
};

// запрос на сервер
const Operation = {
  checkStatusAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(setAuthData(AuthorizationStatus.AUTH, response.data.email));
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
      dispatch(setAuthData(AuthorizationStatus.AUTH, response.data.email));
    })
    .catch((err) => {
      throw err;
    });
  }
};

const setAuthStatus = (err) => {
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    errorMessage: err.statusText
  };
};
const setAuthData = (status, data) => {
  return {
    type: ActionType.AUTHORIZATION,
    authorizationStatus: status,
    users: data
  };
};

export {
  usersReducer,
  ActionType,
  Operation,
  AuthorizationStatus,
  setAuthStatus

};
