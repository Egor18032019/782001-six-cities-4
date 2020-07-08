// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {
  SORTING
} from "../../const.js";

class SortingList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.onSortListClick = this.onSortListClick.bind(this);

  }

  render() {
    const {sortingState, typeSorting, onSortingTypeClick, onFlagSortList} = this.props;
    // console.log(sortingState);
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={() => {
            this.onSortListClick();
            onFlagSortList(this.state.isOpen);
          }}>
          {typeSorting}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
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
      </form>
    );
  }
  onSortListClick() {
    this.setState({isOpen: !this.state.isOpen});
  }
}

SortingList.propTypes = {
  sortingState: PropTypes.bool.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
  typeSorting: PropTypes.string.isRequired,
  onFlagSortList: PropTypes.func.isRequired,
};


export default SortingList;
