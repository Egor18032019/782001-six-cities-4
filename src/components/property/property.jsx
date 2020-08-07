// компонент  «Детальная информация о предложении»
import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Map from "../map/map.jsx";
import NearCard from "../near-card/near-card.jsx";
import {connect} from "react-redux";
import {Operation as DataOperation} from "../../reducer/data/data-reducer.js";
import {getNearbyOffers, getNearbyOffersStatus} from "../../reducer/data/selectors.js";
import Header from "../header/header.jsx";
import {AuthorizationStatus} from "../../reducer/user/user-reducer.js";

class Property extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  render() {

    const {email, onMainTitleClick, onFavoriteButtonClick, nearbyOffers, offer} = this.props;
    const {price, rating, isPremium, type, bedrooms, maxAdults, options, images, stories, host, id,
      isBookmark, title} = offer;
    console.log(isBookmark);
    const ratingStars = `${rating * 20}%`;

    return (
      <div className="page">
        <Header
          email={email}
          authorizationStatus={AuthorizationStatus.AUTH}
        />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, index) => {
                  return (
                    <div className="property__image-wrapper" key={id + index}>
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ? <div className="property__mark"><span>Premium</span></div> : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={`property__bookmark-button button ${isBookmark ? `property__bookmark-button--active` : ``}`} type="button"
                    onClick={() => {
                      this.handleFavoriteClick(offer);
                    }}>
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: ratingStars}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      options.map((option, index) => {
                        return (
                          <li className="property__inside-item" key={id + index}>
                            {option}
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${host.isPro ? `property__avatar-wrapper--pro` : ``}  user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {stories}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                  <ul className="reviews__list">
                    <li className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">
                          Max
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `80%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                        </p>
                        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                      </div>
                    </li>
                  </ul>
                  <form className="reviews__form form" action="#" method="post">
                    <label className="reviews__label form__label" htmlFor="review">Your review</label>
                    <div className="reviews__rating-form form__rating">
                      <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>

                      <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                      <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                        <svg className="form__star-image" width="37" height="33">
                          <use xlinkHref="#icon-star"></use>
                        </svg>
                      </label>
                    </div>
                    <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                activeOffer={id}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {
                  nearbyOffers.map(
                      (nearPlace) => {
                        return <NearCard
                          place={nearPlace}
                          key={nearPlace.id} // кей должен быть стабильный и уникальный
                          onMainTitleClick={onMainTitleClick}
                          // onCardMouseEnter={onCardMouseEnter}
                          // onCardMouseOut={onCardMouseOut}
                          onFavoriteButtonClick={onFavoriteButtonClick}
                        />;
                      })
                }
              </div>
            </section>
          </div>
        </main>

      </div>

    );
  }
  handleFavoriteClick(offer) {
    console.log(`нажал в проперти`, offer.id);
    const {onFavoriteButtonClick} = this.props;
    onFavoriteButtonClick(offer);
    return false;
  }
  componentDidMount() {
    const {offer, loadOfferData} = this.props;
    loadOfferData(offer.id);
  }

  componentDidUpdate(prevProps) {
    const {offer, loadOfferData} = this.props;

    if (this.props.offer.id !== prevProps.offer.id) {
      loadOfferData(offer.id);
    }
  }
}

const mapStateToProps = (store, ownProps) => ({
  offer: ownProps.place,
  nearbyOffers: getNearbyOffers(store),
  isNearbyOffersLoading: getNearbyOffersStatus(store),
  // reviews: getReviews(store),
  // isReviewsLoading: getReviewsStatus(store),
});


const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
  }
});

Property.propTypes = {
  nearbyOffers: PropTypes.array.isRequired,
  loadOfferData: PropTypes.func.isRequired,
  isNearbyOffersLoading: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    maxAdults: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    stories: PropTypes.string.isRequired,
    host: PropTypes.shape({
      avatarUrl: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    })
  })
};

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
