// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {
  SORTING
} from "../../const.js";

class SortingList extends PureComponent {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();

    this.state = {
      isOpen: false,
    };

    this.onSelectClick = this.onSelectClick.bind(this);
    this.onSelectItemClick = this.onSelectItemClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  render() {
    const {typeSorting} = this.props;
    return (
      <form className="places__sorting" action="#" method="get" ref={this.menuRef}>
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={this.onSelectClick}>
          {typeSorting}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpen ? `places__options--opened` : ``}`}>
          {SORTING.map((type, index) => {
            const activeClasss = (type === typeSorting) ? `places__option--active` : ``;
            return (
              <li className={`places__option ${activeClasss}`} tabIndex="0" key={index + type}
                onClick={() => {
                  this.onSelectItemClick(type);
                }}>
                {type}
              </li>);
          })
          }
        </ul>
      </form>
    );
  }

  componentDidMount() {
    document.addEventListener(`click`, this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener(`click`, this.handleClickOutside, true);
  }

  handleClickOutside(event) {
    if (this.menuRef && !this.menuRef.current.contains(event.target)) {
      // добавил реф и вот тут делается проверкая что реф есть и реф содержит event.target
      this.setState({
        isOpen: false
      });
    }
  }
  onSelectClick() {
    this.setState({
      isOpen: true
    });
  }
  onSelectItemClick(type) {
    const {onSortingTypeClick} = this.props;
    this.setState({
      isOpen: false
    });
    if (onSortingTypeClick) {
      onSortingTypeClick(type);
    }
  }
}

SortingList.propTypes = {
  onSortingTypeClick: PropTypes.func.isRequired,
  typeSorting: PropTypes.string.isRequired,
};


export default SortingList;
