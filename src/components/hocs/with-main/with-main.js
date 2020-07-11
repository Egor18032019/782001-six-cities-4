import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withMain = (Component) => {
  class WithMain extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeSortingList: false,
        isOpen: false,
        activeOffer: null,
        typeSorting: `Popular`
      };
    }
    render() {
      const {typeSorting, activeOffer} = this.state;

      return (
        <Component
          {...this.props}
          typeSorting={typeSorting}
          activeOffer={activeOffer}
          onCardMouseEnter={(place)=>{
            this.setState({activeOffer: place});
          }}
          onSortingTypeClick={(type)=>{
            this.setState({typeSorting: type});
          }}
          onCardMouseOut={()=>{
            this.setState({activeOffer: null});
          }}
        >
        </Component>
      );
    }
  }
  WithMain.propTypes = {
    placesCount: PropTypes.number.isRequired,
    onCityNameClick: PropTypes.func.isRequired,
    town: PropTypes.string.isRequired,
    places: PropTypes.array.isRequired,
    onMainTitleClick: PropTypes.func.isRequired,
  };
  return WithMain;
};

export default withMain;
