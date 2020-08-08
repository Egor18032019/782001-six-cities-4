import React, {PureComponent} from "react";
import {Redirect} from "react-router-dom";

const withPrivateRoute = (Component, URL) => {
  class WithPrivateRoute extends PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      const {isAuthorizationStatus} = this.props;
      if (isAuthorizationStatus) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to={URL} />;
      }
    }
  }

  return WithPrivateRoute;
};

export default withPrivateRoute;
