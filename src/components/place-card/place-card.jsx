// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {place,
      onMainTitleClick,
      onHoverCard,
      onLeaveCard} = this.props;
    const {
      description, type
    } = place;

    return (
      <article
        // не забывать добавлять key(требование Reacta)
        // key={key}
        onMouseEnter={() => {
          onHoverCard(place);
        }}
        onMouseLeave={onLeaveCard}
        className="cities__place-card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;120</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
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
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 onClick={onMainTitleClick} className="place-card__name">
            <a href="#">{description}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  onMainTitleClick: PropTypes.func.isRequired,
  onHoverCard: PropTypes.func.isRequired,
  onLeaveCard: PropTypes.func.isRequired,
  place: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    prise: PropTypes.number.isRequired,
    isBookmark: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    coordinate: PropTypes.array.isRequired,
  }).isRequired,
};


export default PlaceCard;
