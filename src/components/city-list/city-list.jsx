// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {
  CITYLIST
} from "../../const.js";

class CityList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {onCityNameClick, town} = this.props;
    // TODO: подумать о другой структуре мокков(например: city: `` и ofers: [])
    // то есть тыкаем на город и подгружается не весь лям карточек а только те карточки которые нужны для этого города
    // - спросить у Максима
    return (
      <ul className="locations__list tabs__list">
        {CITYLIST.map((city, index) => {
          if (city === town) {
            return (
              <li
                onClick={() => {
                  onCityNameClick(city);
                }}
                className="locations__item" key={index + city}>
                <a className="locations__item-link tabs__item tabs__item--active" href="#">
                  <span>{city}</span>
                </a>
              </li>);
          } else {
            return (
              <li
                onClick={() => {
                  onCityNameClick(city);
                }}
                className="locations__item" key={index + city}>
                <a className="locations__item-link tabs__item" href="#">
                  <span>{city}</span>
                </a>
              </li>);
          }
        })}
      </ul>
    );
  }
}

CityList.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  townList: PropTypes.array,
  town: PropTypes.string,
};


export default CityList;
