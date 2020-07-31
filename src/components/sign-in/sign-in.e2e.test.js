import React from "react";
import Enzyme, {
  mount,
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
import SignIn from "./sign-in.jsx";
import NameSpace from "../../reducer/name-space.js";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockStore = configureStore([]);

const onLoginUsers = {
  preventDefault() {}
};
describe(`test SignIn e2e`, () => {
  it(`SignIn should submit and dispatch on button click`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        data: [],
        isDataLoaded: false,
        placesCount: 0,
        town: `Amsterdam`,
        errorMessage: ``
      },
      [NameSpace.OFFERS]: {
        active: `mainPages`,
        cardId: null,
      },
      [NameSpace.USERS]: {
        authorizationStatus: `NO_AUTH`,
        users: ``,
      },
    });
    store.dispatch = jest.fn();

    const signForm = mount(
        <Provider store={store}>
          <Router history={history}>
            <SignIn
              onLoginUsers = {
                onLoginUsers
              }
              activeTown={`Paris`}
            />
          </Router>
        </Provider>
    );
    const authForm = signForm.find(`form`).at(0);
    authForm.simulate(`submit`, onLoginUsers);
    // expect(authForm.called).toBe(true);
    // --  Макс как тут тестить ?? почему так не работает то????
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    // и так тоже,?????????????????????????????????????????????????
  });
});
