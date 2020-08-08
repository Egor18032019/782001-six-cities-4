// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const.js";
import {AuthorizationStatus} from "../../reducer/user/user-reducer.js";
import history from "../../history.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    // есть кнопка биндим её
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  render() {
    const {place,
      onCardMouseEnter,
      onCardMouseOut} = this.props;
    const {type, isPremium, mainPhoto, price, isBookmark, rating, title} = place;
    const ratingStars = `${rating * 20}%`;

    if (place) {
      return (
        <article
          onMouseEnter={() => {
            onCardMouseEnter(place.id);
          }}
          onMouseLeave={onCardMouseOut}
          className="cities__place-card place-card">

          {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``}
          <div className="cities__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img className="place-card__image" src={mainPhoto} width="260" height="200" alt="Place image" />
            </a>
          </div>
          <div className="place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className={`place-card__bookmark-button button ${isBookmark ? `place-card__bookmark-button--active` : ``}`} type="button"
                onClick={this.handleFavoriteClick}>
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                {/* свойства записыватьтак style={{marginRight: spacing + 'em'}}
          */}
                <span style={{width: ratingStars}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={`offer/${place.id}`}>{title}</Link>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      );
    } else {
      return ``;
    }
  }

  handleFavoriteClick() {
    const {authorizationStatus, onFavoriteButtonClick, place} = this.props;
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return history.push(AppRoute.LOGIN);
    }
    onFavoriteButtonClick(place);
    return false;
  }
}

PlaceCard.propTypes = {
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    coordinate: PropTypes.array.isRequired,
    mainPhoto: PropTypes.string.isRequired,
  }).isRequired,
  // в массиве дополнительно надо указывть PropTypes элемента(чему равен каждый элемент массива- строка или число и т.п.)
  // typePlaces: PropTypes.arrayOf(PropTypes.string).isRequired,
};


export default PlaceCard;
