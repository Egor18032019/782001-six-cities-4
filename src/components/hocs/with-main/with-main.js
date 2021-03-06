import React, {PureComponent} from "react";

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
          onCardMouseOut={()=>{
            this.setState({activeOffer: null});
          }}
          onSortingTypeClick={(type)=>{
            this.setState({typeSorting: type});
          }}
        >
        </Component>
      );
    }
  }

  return WithMain;
};

export default withMain;
