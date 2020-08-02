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
    return (
      <ul className="locations__list tabs__list">
        {CITYLIST.map((city, index) => {
          const activeClasss = (city === town) ? `tabs__item--active` : ``;
          return (
            <li
              onClick={() => {
                onCityNameClick(city);
              }}
              className="locations__item" key={index + city}>
              <a className={`locations__item-link tabs__item ${activeClasss}`} href="#">
                <span>{city}</span>
              </a>
            </li>);
        })
        }
      </ul >
    );
  }
}

CityList.propTypes = {
  onCityNameClick: PropTypes.func.isRequired,
  townList: PropTypes.array,
  town: PropTypes.string,
};


export default CityList;
