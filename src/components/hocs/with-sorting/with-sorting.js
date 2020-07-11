import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withSorting = (Component) => {
  class WithSorting extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
      document.addEventListener(`click`, this.handleClickOutside, true);
    }
    componentWillUnmount() {
      document.removeEventListener(`click`, this.handleClickOutside, true);
    }
    render() {
      const {isOpen} = this.state;
      const {onSortingTypeClick} = this.props;
      return (
        <Component
          {...this.props}
          isOpen={isOpen}
          handleClickOutside={this.handleClickOutside}
          onSelectClick={()=>{
            this.setState({
              isOpen: true
            });
          }}
          onSelectItemClick={(type)=>{
            this.setState({
              isOpen: false
            });
            if (onSortingTypeClick) {
              onSortingTypeClick(type);
            }
          }}>
        </Component>
      );
    }

    handleClickOutside() {
      // добавил реф и вот тут делается проверкая что реф есть и реф содержит event.target
      this.setState({
        isOpen: false
      });
    }
  }
  WithSorting.propTypes = {
    onSortingTypeClick: PropTypes.func.isRequired,
    typeSorting: PropTypes.string.isRequired,
  };
  return WithSorting;
};

export default withSorting;
