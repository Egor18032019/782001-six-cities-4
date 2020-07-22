import React from "react";
import Enzyme, {
  mount,
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SignIn from "./sign-in.jsx";
import NameSpace from "../../reducer/name-space.js";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

Enzyme.configure({
  adapter: new Adapter(),
});
const mockStore = configureStore([]);


describe(`test SignIn e2e`, () => {
  it(`SignIn should submit and dispatch on button click`, () => {
    const onSubmit = jest.fn();
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
        users: ``,
      },
    });
    const signForm = mount(
        <Provider store={store}>
          <SignIn
            onSubmit = {
              onSubmit
            }
          />
        </Provider>
    );
    const authForm = signForm.find(`form`);
    authForm.simulate(`submit`);
    // expect(authForm.called).toBe(true);
    // --  Макс как тут тестить ?? почему так не работает то????
    expect(store.dispatch).toBe(1);
    // и так тоже,?????????????????????????????????????????????????
  });
});
