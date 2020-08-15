import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../../reducer/user/user-reducer";
import PropTypes from "prop-types";

const withPrivateRoute = (Component, URL) => {
  class WithPrivateRouteComponent extends PureComponent {
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
  WithPrivateRouteComponent.propTypes = {
    authorizationStatus: PropTypes.string.isRequired
  };

  return WithPrivateRouteComponent;
};


export default withPrivateRoute;
