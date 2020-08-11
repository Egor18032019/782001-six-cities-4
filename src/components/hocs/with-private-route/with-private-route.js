import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../../reducer/user/user-reducer.js";

const withPrivateRoute = (Component, URL) => {
  class WithPrivateRoute extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {authorizationStatus} = this.props;
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return <Component {...this.props} />;
      } else if (authorizationStatus === AuthorizationStatus.LOAD) {
        return (`Ожидаем ответа сервера`);
      } else {
        return <Redirect to={URL} />;
      }
    }
  }

  return WithPrivateRoute;
};


export default withPrivateRoute;
