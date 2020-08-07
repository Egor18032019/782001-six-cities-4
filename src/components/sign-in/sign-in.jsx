// компонент "авторизация пользователя"
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";

import Header from "../header/header.jsx";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();
    // чтобы знать состояния полей ввода добавляем рефы

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {activeTown, email, authorizationStatus} = this.props;

    return (
      <div className="page page--gray page--login">
        <Header
          email={email}
          authorizationStatus={authorizationStatus}
        />

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post"
                onSubmit={this.handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" type="email" name="email" placeholder="Email" required=""
                    ref={this.loginRef}/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" type="password" name="password" placeholder="Password" required=""
                    ref={this.passwordRef}/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
                  <span>{activeTown}</span>
                </Link>
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

  handleSubmit(evt) {
    const {onLoginUsers} = this.props;

    evt.preventDefault();

    onLoginUsers({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }
}

SignIn.propTypes = {
  onLoginUsers: PropTypes.func.isRequired,
  activeTown: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};


export default SignIn;
