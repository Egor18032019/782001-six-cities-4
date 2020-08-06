import {
  usersReducer,
  AuthorizationStatus,
  ActionType
} from "./user-reducer.js";

describe(`state work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(usersReducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      users: ``,
      usersErrorMessage: ``
    });
  });

  it(`The reducer should change the error to the value that came in`, () => {
    expect(usersReducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      users: ``,
      usersErrorMessage: ``
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      usersErrorMessage: 400
    })).toEqual({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      users: ``,
      usersErrorMessage: 400
    });
  });

  it(`The reducer should change the users to the value that came in`, () => {
    expect(usersReducer({
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      users: ``,
      usersErrorMessage: ``
    }, {
      type: ActionType.AUTHORIZATION,
      authorizationStatus: AuthorizationStatus.AUTH,
      users: `qwe@gmail.ru`
    })).toEqual({
      authorizationStatus: AuthorizationStatus.AUTH,
      users: `qwe@gmail.ru`,
      usersErrorMessage: ``
    });
  });
});
