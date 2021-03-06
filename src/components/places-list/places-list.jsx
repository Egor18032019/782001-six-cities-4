import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import SortingList from "../sorting/sorting-list.jsx";
import withSorting from "../hocs/with-sorting/with-sorting";
const SortingListWrapped = withSorting(SortingList);
import Map from "../map/map.jsx";
import EmptyPlaces from "../empty-places/empty-places.jsx";

const PlacesList = (props) => {
  const {places, onCardMouseEnter, onCardMouseOut, activeOffer, onSortingTypeClick,
    typeSorting, placesCount, town, onFavoriteButtonClick, authorizationStatus} = props;

  if (places.length > 0) {
    return (
      <div className={`cities__places-container container`}>
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{placesCount} places to stay in {town} </b>
          {
            <SortingListWrapped
              typeSorting={typeSorting}
              onSortingTypeClick={onSortingTypeClick}
            />
          }
          {/*  коментировать в реакте так  */}
          <div className="cities__places-list places__list tabs__content">
            {
              places.map(
                  (place) => {
                    return <PlaceCard
                      place={place}
                      onCardMouseEnter={onCardMouseEnter}
                      onCardMouseOut={onCardMouseOut}
                      key={place.id} // кей должен быть стабильный и уникальный
                      onFavoriteButtonClick={onFavoriteButtonClick}
                      authorizationStatus={authorizationStatus}
                    />;
                  }
              )
            }
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            <Map
              activeOffer={activeOffer}
            />
          </section>
        </div>;
      </div>
    );
  } else {
    return (
      <div className={`cities__places-container cities__places-container--empty container`}>
        <EmptyPlaces
          town={town}
        />;
        <div className="cities__right-section"></div>;
      </div>
    );
  }

};

PlacesList.propTypes = {
  activeOffer: PropTypes.number,
  onSortingTypeClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  typeSorting: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  placesCount: PropTypes.number.isRequired,
  town: PropTypes.string.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  places: PropTypes.array.isRequired,
};

export default PlacesList;
