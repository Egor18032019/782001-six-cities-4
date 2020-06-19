import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    // В стейте компонента должна быть активная карточка с предложением.
    //  Под активной карточкой предложения подразумевается карточка,
    //  на которую пользователь навёл курсор.

    // заводим стате
    this.state = {
      activeCard: null
    };
    // .биндим обработчики
    this.handleOnCardEnterMouse = this._handleOnCardEnterMouse.bind(this);
    this.handleOnCardLeaveMouse = this._handleOnCardLeaveMouse.bind(this);
  }

  render() {
    const {places, onMainTitleClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content" key={Date.now() + `div`}>
        {
          places.map(
              (place, index) => {
                return <PlaceCard
                  place={place}
                  onMainTitleClick={onMainTitleClick}
                  forKey={place.id + place.city + index}
                  onHoverCard={this.handleOnCardEnterMouse}
                  onLeaveCard={this.handleOnCardLeaveMouse}
                  // не понял зачем тут  key и куда он идёт.React просил я и добавил
                  key = {Date.now()}
                />;
              }
          )
        }
      </div>
    );
  }

  _handleOnCardEnterMouse(place) {
    this.setState({
      activeCard: place.id, // id или key ???
    });
  }

  _handleOnCardLeaveMouse() {
    // тут  заводим то что при уходе мышки стате становиться равен нулю
    this.setState({
      activeCard: null,
    });
  }
}


PlacesList.propTypes = {
  onMainTitleClick: PropTypes.func.isRequired,
  places: PropTypes.array.isRequired,
};

export default PlacesList;
