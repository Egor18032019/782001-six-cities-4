import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducer/user/user-reducer";
import {AppRoute} from "../../const";


const Header = (props) => {
  const {email, authorizationStatus} = props;
  const isAuth = (authorizationStatus === AuthorizationStatus.AUTH);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.ROOT}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{isAuth ? email : `Sing in now`}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default Header;
