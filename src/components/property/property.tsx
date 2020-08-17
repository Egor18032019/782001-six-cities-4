// компонент  «Детальная информация о предложении»
 import {connect} from "react-redux";
import * as React from "react";
import {getFilterOffersOnID} from "../../utils.js";
import {AuthorizationStatus} from "../../reducer/user/user-reducer";
import {Operation as DataOperation} from "../../reducer/data/data-reducer";
import {getNearbyOffers, getNearbyOffersStatus, getOffers, getReviews, getReviewsStatus} from "../../reducer/data/selectors.js";
import Map from "../map/map.jsx";
import Header from "../header/header.jsx";
import NearCard from "../near-card/near-card.jsx";
import Reviews from "../reviews/reviews.jsx";
import ReviewsForm from "../reviews-form/reviews-form.jsx";
import withForm from "../hocs/with-form/whit-form.jsx";
const ReviewsFormWrapper = withForm(ReviewsForm);

interface Props {
  isReviewsLoading: boolean,
  nearbyOffers: [{id: number,
    type: string,
    description: string,
    title: string,
    price: number,
    isBookmark: boolean,
    isPremium: boolean,
    rating: number,
    bedrooms: number,
    maxAdults: number,
    options: [],
    images: [],
    stories: string,
    host: {
      avatarUrl: string,
      isPro: boolean,
      name: string,
    }}],
  loadOfferData: (matchId:number)=>{},
  loadReviewsData: (matchId:number)=>{},
  isNearbyOffersLoading: boolean,
  authorizationStatus: string,
  onFavoriteButtonClick: (offer:{})=> void,
  email: string,
  choiseId: string,
  reviews: any,
  places: [],
  place:{
    id: number,
    type: string,
    description: string,
    title: string,
    price: number,
    isBookmark: boolean,
    isPremium: boolean,
    rating: number,
    bedrooms: number,
    maxAdults: number,
    options: [],
    images: [],
    stories: string,
    host: {
      avatarUrl: string,
      isPro: boolean,
      name: string,
    }
  }

}

class Property extends React.PureComponent <Props> {
  constructor(props) {
    super(props);
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  render() {
    const {email, onFavoriteButtonClick, nearbyOffers, choiseId, places, reviews, isReviewsLoading, authorizationStatus} = this.props;
    // переводим строку в число
    console.log(nearbyOffers)
    const matchId = +choiseId;
    const offerArray = getFilterOffersOnID(places, matchId);
    // не придумал как разобрать - разобрал так
    const offer = offerArray[0];
    const {price, rating, isPremium, type, bedrooms, maxAdults, options, images, stories, host, id,
      isBookmark, title} = offer;
    const limiteImages = images.slice(0, 6);
    const limiteReviews = reviews.slice(0, 10);
    limiteReviews.sort(function (a, b) {
      return a - b;
    });
    const ratingStars = `${Math.floor(rating * 20)}%`;
    if (!isReviewsLoading) {
      return (`Пишем коментарии`);
    }
    return (
      <div className="page">
        <Header
          email={email}
          authorizationStatus={authorizationStatus}
        />
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {limiteImages.map((image, index) => {
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
                      <img className="property__avatar user__avatar" src={`/` + host.avatarUrl} width="74" height="74" alt="Host avatar" />
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
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    {/* коментарии */}
                    {limiteReviews.map((review) =>
                      <Reviews
                        review={review}
                        key={review.id}
                      />)}
                    {/* коментарии */}
                  </ul>
                  {/* Форма отправки */}
                  {(authorizationStatus === AuthorizationStatus.AUTH) ?
                    <ReviewsFormWrapper
                      offerId={id}
                    /> : ``}

                  {/* Форма отправки */}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                activeOffer={id}
                nearbyOffers={nearbyOffers}
                offer={offer}
                matchId={matchId}
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
    const {onFavoriteButtonClick} = this.props;
    onFavoriteButtonClick(offer);
  }
  componentDidMount() {
    const {loadOfferData, loadReviewsData, choiseId} = this.props;
    const matchId = +choiseId;
    loadOfferData(matchId);
    loadReviewsData(matchId);
  }
  componentDidUpdate(prevProps) {
    const {loadOfferData, loadReviewsData, choiseId} = this.props;
    const matchId = +choiseId;
    if (this.props.choiseId !== prevProps.choiseId) {
      loadOfferData(matchId);
      loadReviewsData(matchId);
    }
  }
}

const mapStateToProps = (store) => ({
  places: getOffers(store),
  nearbyOffers: getNearbyOffers(store),
  isNearbyOffersLoading: getNearbyOffersStatus(store),
  reviews: getReviews(store),
  isReviewsLoading: getReviewsStatus(store),
});

const mapDispatchToProps = (dispatch) => ({
  loadOfferData(id) {
    dispatch(DataOperation.loadNearbyOffers(id));
  },
  loadReviewsData(id) {
    dispatch(DataOperation.loadReviews(id));
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);

