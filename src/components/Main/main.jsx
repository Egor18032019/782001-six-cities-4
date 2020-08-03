import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlacesList from "../places-list/places-list.jsx";
import CityList from "../city-list/city-list.jsx";
import Header from "../header/header.jsx";


class Main extends PureComponent {

  render() {
    const {placesCount, town, places, onMainTitleClick, onCityNameClick, authorizationStatus,
      typeSorting, onSortingTypeClick, onCardMouseEnter, onCardMouseOut, activeOffer, email, onFavoriteButtonClick} = this.props;

    let emptyMain = ``;
    if (places.length === 0) {
      emptyMain = `page__main--index-empty`;

    }
    const sortingPlaces = this._getSortedPlaces(typeSorting, places);
    return (
      <div className="page page--gray page--main">
        <Header
          email={email}
          authorizationStatus={authorizationStatus}
        />
        <main className={`page__main page__main--index ${emptyMain}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CityList
                town={town}
                onCityNameClick={onCityNameClick}
              />
            </section>
          </div>
          <div className="cities">
            {
              <PlacesList
                places={sortingPlaces}
                placesCount={placesCount}
                town={town}
                onMainTitleClick={onMainTitleClick}
                onCardMouseEnter={onCardMouseEnter}
                onCardMouseOut={onCardMouseOut}
                typeSorting={typeSorting}
                onSortingTypeClick={onSortingTypeClick}
                activeOffer={activeOffer}
                onFavoriteButtonClick={onFavoriteButtonClick}
                authorizationStatus={authorizationStatus}
              />
            }
          </div>
        </main>
      </div>
    );
  }

  _getSortedPlaces(sortingType, places) {
    switch (sortingType) {
      case `Price: low to high`:
        return places.slice().sort((a, b) => a.price - b.price);

      case `Price: high to low`:
        return places.slice().sort((a, b) => b.price - a.price);

      case `Top rated first`:
        return places.slice().sort((a, b) => b.rating - a.rating);

      default:
        return places;
    }
  }
}

Main.propTypes = {
  placesCount: PropTypes.number.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  town: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  activeOffer: PropTypes.number,
  // я таки и не понял что с нулем в пропсах делать
  typeSorting: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default Main;
