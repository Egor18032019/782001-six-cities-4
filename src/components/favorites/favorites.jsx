// компонент "Страниц избранных предложений"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute, CITYLIST} from "../../const.js";

import Header from "../header/header.jsx";
import FavoritesEmpty from "./favorites-empty.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data-reducer.js";
import {getFavoritesOffers} from "../../reducer/data/selectors.js";

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
  }

  render() {
    const {email, authorizationStatus, favoriteOffers} = this.props;
    if (!favoriteOffers.length) {
      return <FavoritesEmpty
        email={email}
        authorizationStatus={authorizationStatus}
      />;
    }

    return (
      <div className="page">
        <Header
          email={email}
          authorizationStatus={authorizationStatus}
        />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {/* прохожу по массиву с городами и фильтрую пришедший массив фаворитами по городу */}
                {CITYLIST.map((city)=>{
                  return (
                    favoriteOffers.filter((offer)=> offer.city === city).length !== 0 ?
                    // проверка на длину массива. если вдруг не будет такого города
                      <li className="favorites__locations-items" key={city + Date.now()}>
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link" to={AppRoute.MAIN}>
                              <span>{city}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {/* а тут пришедщий массив фильтрую по городу и потом каждый элемент прошедший проверку отрисовываю */}
                          {favoriteOffers.filter((offer)=> offer.city === city).map((cardOffer)=>{
                            return (
                              <article className="favorites__card place-card" key={cardOffer.id + Date.now()}>
                                <div className="favorites__image-wrapper place-card__image-wrapper">
                                  <a href="#">
                                    <img className="place-card__image" src={cardOffer.mainPhoto} style={{width: `150`, height: `110`}} alt="Place image"/>
                                  </a>
                                </div>
                                <div className="favorites__card-info place-card__info">
                                  <div className="place-card__price-wrapper">
                                    <div className="place-card__price">
                                      <b className="place-card__price-value">&euro;{cardOffer.price}</b>
                                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                                    </div>
                                    <button className={`place-card__bookmark-button button  place-card__bookmark-button--active`} type="button"
                                      onClick={this.onFavoriteClick(cardOffer)}>
                                      <svg className="place-card__bookmark-icon" style={{width: `18`, height: `19`}}>
                                        <use xlinkHref="#icon-bookmark"></use>
                                      </svg>
                                      <span className="visually-hidden">In bookmarks</span>
                                    </button>
                                  </div>
                                  <div className="place-card__rating rating">
                                    <div className="place-card__stars rating__stars">
                                      <span style={{width: `100%`}}></span>
                                      <span className="visually-hidden">Rating</span>
                                    </div>
                                  </div>
                                  <h2 className="place-card__name">
                                    <a href="#">{cardOffer.title}</a>
                                  </h2>
                                  <p className="place-card__type">{cardOffer.type}</p>
                                </div>
                              </article>
                            );
                          })}</div>
                      </li> : ``
                  );
                })}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.MAIN}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" style={{width: `64`, height: `33`}}/>
          </Link>
        </footer>
      </div>
    );
  }

  onFavoriteClick(place) {
    const {onFavoriteButtonClick} = this.props;
    console.log(`нажал в избранное`, place.id);
    onFavoriteButtonClick(place);
  }

  //  что бы данные подгружались в момент монтирования это элемента дисптачим и делаем загрузку
  componentDidMount() {
    const {loadFavoriteOffers} = this.props;
    loadFavoriteOffers();
  }
}
const mapStateToProps = (state) => ({
  favoriteOffers: getFavoritesOffers(state),
  // TODO: может сделать чтобы он список городов выдергивал из пришедших офферов ??
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers());
  },
  onFavoriteButtonClick(place) {
    dispatch(DataOperation.addToFavorite(place));
  }
});
Favorites.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  favoriteOffers: PropTypes.array,
  loadFavoriteOffers: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
};

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites); // первым стате а вторым диспатчеры
