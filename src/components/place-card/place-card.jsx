// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {AppRoute} from "../../const.js";
import {AuthorizationStatus} from "../../reducer/user/user-reducer.js";
import {Operation} from "../../reducer/data/data-reducer.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import history from "../../history.js";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    // есть кнопка биндим её
    this.onFavoriteClick = this.onFavoriteClick.bind(this);
  }

  render() {
    const {place,
      onMainTitleClick,
      onCardMouseEnter,
      onCardMouseOut} = this.props;
    const {
      description, type, isPremium, mainPhoto, price, isBookmark, rating
    } = place;
    console.log(isBookmark);

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
                onClick={this.onFavoriteClick}>
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
                <span style={{width: `${rating * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 onClick={() => {
              onMainTitleClick(place);
            }} className="place-card__name">
              <Link to={AppRoute.PROPERTY}>{description}</Link>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      );
    } else {
      return ``;
    }
  }

  onFavoriteClick() {
    const {authorizationStatus, onFavoriteButtonClick, place} = this.props;
    console.log(authorizationStatus === AuthorizationStatus.AUTH);

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return history.push(AppRoute.LOGIN);
    }
    console.log(`нажал в избранное`, place.id);
    onFavoriteButtonClick(place);
    return false;
  }
}
const mapDispatchToProps = (dispatch) => ({
  onFavoriteButtonClick(place) {
    dispatch(Operation.addToFavorite(place));
  }}
);
const mapStateToProps = (store) => ({
  authorizationStatus: getAuthStatus(store),
});

PlaceCard.propTypes = {
  onMainTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
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


export {PlaceCard};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceCard);


// -??? Максим почему этот компонент перерисовываеться при наведении мышкой ??
