import NameSpace from "../name-space.js";

const getAuthStatus = (state) => {
  return state[NameSpace.USERS].authorizationStatus;
};

export {
  getAuthStatus
};
