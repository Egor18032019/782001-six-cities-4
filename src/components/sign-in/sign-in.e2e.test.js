import React from "react";
import Enzyme, {
  mount,
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {
  Provider
} from "react-redux";
import {
  Router
} from "react-router-dom";
import {
  createBrowserHistory
} from "history";
const history = createBrowserHistory();
import SignIn from "./sign-in.jsx";
import NameSpace from "../../reducer/name-space.js";


Enzyme.configure({
  adapter: new Adapter(),
});
const mockStore = configureStore([]);


describe(`test SignIn e2e`, () => {
  it(`SignIn should submit and use onLoginUsers`, () => {
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

    const onLoginUsers = jest.fn();

    const signForm = mount(
        <Provider store = {store}>
          <Router history = {history}>
            <SignIn
              onLoginUsers = {onLoginUsers}
              activeTown = {`Paris`}
              email = {``}
              authorizationStatus = {`NO_AUTH`}
            />
          </Router>
        </Provider>
    );
    const authForm = signForm.find(`form`).at(0);
    authForm.simulate(`submit`, {
      preventDefault: () => {}
    }); // незабывать передавать заглушку
    expect(onLoginUsers).toHaveBeenCalledTimes(1);
  });
  it(`SignIn should submit and change ref`, () => {


    const onLoginUsers = jest.fn();

    const signForm = mount(
        <Router history = {history}>
          <SignIn
            onLoginUsers = {onLoginUsers}
            activeTown = {`Paris`}
            email = {``}
            authorizationStatus = {`NO_AUTH`}
          />
        </Router>
    );
    const authForm = signForm.find(`form`).at(0);
    authForm.simulate(`submit`, {preventDefault: () => {}}); // незабывать передавать заглушку
    const loginRef = signForm.find(`.login__input`).at(0); // Логин
    loginRef.value = `qwe@gmail.ru`;
    const passwordRef = signForm.find(`.login__input`).at(1); // пароль
    passwordRef.value = 11;
    const ref = {
      login: loginRef.value,
      password: passwordRef.value,
    };
    expect(onLoginUsers).toHaveBeenCalledWith(ref); // ождидаем что он вернет значения -но нет.

  });
});
