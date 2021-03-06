// компонент "Карточка предложения"
import React from "react";
import PropTypes from "prop-types";

const CityList = ({town, cityList, onCityNameClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {cityList.map((city, index) => {
        const activeClasss = (city === town) ? `tabs__item--active` : ``;
        return (
          <li
            onClick={() => {
              onCityNameClick(city);
            }} className="locations__item" key={index + city}>
            <a className={`locations__item-link tabs__item ${activeClasss}`} href="#">
              <span>{city}</span>
            </a>
          </li>);
      })
      }
    </ul >
  );
};


CityList.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  town: PropTypes.string,
  cityList: PropTypes.array.isRequired,
};


export default CityList;
