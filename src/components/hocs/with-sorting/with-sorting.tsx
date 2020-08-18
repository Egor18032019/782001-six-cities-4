// закрывает список сортировки
import * as React from "react";
import {Subtract} from "utility-types";

interface InjectingProps {
  // typeSorting: string,
  onSortingTypeClick: (type:string)=>{},
}

interface State {
  isOpen:boolean
}

const withSorting = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithSorting extends React.PureComponent <T,State> {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
      this.handleClickOutside = this.handleClickOutside.bind(this);
      this.onSelectClick = this.onSelectClick.bind(this);
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
          onSelectClick={this.onSelectClick}
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

    onSelectClick(){
      this.setState({
        isOpen: true
      });
    }

    handleClickOutside() {
      // добавил реф и вот тут делается проверкая что реф есть и реф содержит event.target
      this.setState({
        isOpen: false
      });
    }
  }

  return WithSorting;
};

export default withSorting;
