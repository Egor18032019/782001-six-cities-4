import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const";


import Header from "../header/header.jsx";

class FavoritesEmpty extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {email, authorizationStatus} = this.props;

    return (
      <div className="page page--favorites-empty">
        <Header
          email={email}
          authorizationStatus={authorizationStatus}
        />
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" style={{width: `64`, height: `33`}}/>
          </Link>
        </footer>
      </div>
    );
  }
}

FavoritesEmpty.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default FavoritesEmpty;
