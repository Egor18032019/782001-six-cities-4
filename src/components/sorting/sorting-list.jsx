// компонент "Карточка предложения"
import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {
  SORTING
} from "../../const";

class SortingList extends PureComponent {
  constructor(props) {
    super(props);

    this.menuRef = React.createRef();
    // не придумал как вынести это в hoc === оставил тут
    this.onClickOutside = this.onClickOutside.bind(this);
  }

  render() {
    const {typeSorting, isOpen, onSelectClick, onSelectItemClick} = this.props;
    return (
      <form className="places__sorting" action="#" method="get" ref={this.menuRef}>
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0"
          onClick={onSelectClick}>
          {typeSorting}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
          {SORTING.map((type, index) => {
            const activeClasss = (type === typeSorting) ? `places__option--active` : ``;
            return (
              <li className={`places__option ${activeClasss}`} tabIndex="0" key={index + type}
                onClick={() => {
                  onSelectItemClick(type);
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
    document.addEventListener(`click`, this.onClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener(`click`, this.onClickOutside, true);
  }
  onClickOutside(event, menuRef) {
    // так сделал чтобы использовать реф(по другому не смог придумать)
    if (menuRef && !menuRef.current.contains(event.target)) {
      const {handleClickOutside} = this.props;
      handleClickOutside();
    }
  }
}

SortingList.propTypes = {
  typeSorting: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClickOutside: PropTypes.func.isRequired,
  onSelectClick: PropTypes.func.isRequired,
  onSelectItemClick: PropTypes.func.isRequired,
};


export default SortingList;
