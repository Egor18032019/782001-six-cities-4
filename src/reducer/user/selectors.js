import NameSpace from "../name-space.js";

const getAuthStatus = (state) => {
  return state[NameSpace.USERS].authorizationStatus;
};
const getEmail = (state) => {
  return state[NameSpace.USERS].users;
};
const getUsersErrorMessage = (state) => {
  return state[NameSpace.USERS].usersErrorMessage;
};

export {
  getAuthStatus, getEmail, getUsersErrorMessage
};
