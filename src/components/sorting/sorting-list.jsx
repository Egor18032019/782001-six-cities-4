// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {
  SORTING
} from "../../const.js";

class SortingList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {sortingState, typeSorting, onSortingTypeClick} = this.props;
    return (
      <ul className={`places__options places__options--custom ${sortingState ? `places__options--opened` : ``}`}>
        {SORTING.map((type, index) => {
          const activeClasss = (type === typeSorting) ? `places__option--active` : ``;
          return (
            <li className={`places__option ${activeClasss}`} tabIndex="0" key={index + type}
              onClick={() => {
                onSortingTypeClick(type);
              }}>
              {type}
            </li>);
        })
        }
      </ul>
    );
  }
}

SortingList.propTypes = {
  sortingState: PropTypes.bool.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
  typeSorting: PropTypes.string.isRequired,
};


export default SortingList;
