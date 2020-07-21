
// Определяем действия(actions)
const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

// Объект начального состояния(state):
const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  users: ``
};


const usersReducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
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
        dispatch(setAuthStatus(AuthorizationStatus.AUTH, response.data.email));
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
      dispatch(setAuthStatus(AuthorizationStatus.AUTH, response.data.email));
    })
    .catch((err) => {
      throw err;
    });
  }
};

const setAuthStatus = (status, data) => {
  // console.log(data);
  return {
    type: ActionType.REQUIRED_AUTHORIZATION,
    authorizationStatus: status,
    users: data
  };
};


export {
  usersReducer,
  ActionType,
  Operation,
  AuthorizationStatus
};
