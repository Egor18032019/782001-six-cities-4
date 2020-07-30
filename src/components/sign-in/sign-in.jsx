// компонент "авторизация пользователя"
import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {AppRoute} from "../../const.js";
import {Link} from "react-router-dom";

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = createRef();
    this.passwordRef = createRef();
    // чтобы знать состояния полей ввода добавляем рефы

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const {activeTown} = this.props;

    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to={AppRoute.MAIN}>
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" style={{width: `81`}} />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__login">Sign in</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

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
                <Link className="locations__item-link" to={AppRoute.MAIN}>
                  <span>{activeTown}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }
}

SignIn.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  activeTown: PropTypes.string.isRequired
  // Максим ка сделать чтоб тут не было ошибки в консоле???
};


export default SignIn;
