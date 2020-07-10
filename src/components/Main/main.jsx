import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlacesList from "../places-list/places-list.jsx";
import CityList from "../city-list/city-list.jsx";
import Map from "../map/map.jsx";

import SortingList from "../sorting/sorting-list.jsx";
import withSorting from ".././hocs/with-sorting/with-sorting.js";
const SortingListWrapped = withSorting(SortingList);

class Main extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeSortingList: false,
      isOpen: false,
      activeOffer: null,
      typeSorting: `Popular`
    };
    this.onCardMouseEnter = this.onCardMouseEnter.bind(this);
    this.onCardMouseOut = this.onCardMouseOut.bind(this);
    this.onSortingTypeClick = this.onSortingTypeClick.bind(this);
  }

  render() {
    const {placesCount, town, places, onMainTitleClick, onCityNameClick} = this.props;
    const sortingPlaces = this._getSortedPlaces(this.state.typeSorting, places);
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
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
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{placesCount} places to stay in {town} </b>
                {
                  <SortingListWrapped
                    typeSorting={this.state.typeSorting}
                    onSortingTypeClick={this.onSortingTypeClick}
                  />
                }
                {/*
                <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select>
                 коментировать в реакте так
                 */}

                {
                  <PlacesList
                    places={sortingPlaces}
                    onMainTitleClick={onMainTitleClick}
                    onCardMouseEnter={this.onCardMouseEnter}
                    onCardMouseOut={this.onCardMouseOut}
                  />
                }
              </section>
              <div className="cities__right-section">
                <Map
                  places={places}
                  activeOffer={this.state.activeOffer}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  onCardMouseEnter(place) {
    this.setState({activeOffer: place});
  }
  onCardMouseOut() {
    this.setState({activeOffer: null});
  }
  onSortingTypeClick(type) {
    this.setState({typeSorting: type});
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
  town: PropTypes.string.isRequired,
  places: PropTypes.array.isRequired,
  onMainTitleClick: PropTypes.func.isRequired,
};

export default Main;
