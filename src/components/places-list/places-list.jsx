import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);
    // В стейте компонента должна быть активная карточка с предложением.
    //  Под активной карточкой предложения подразумевается карточка,
    //  на которую пользователь навёл курсор.

  }

  render() {
    const {places, onMainTitleClick, onCardMouseEnter, onCardMouseOut} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {
          places.map(
              (place, index) => {
                return <PlaceCard
                  place={place}
                  onMainTitleClick={onMainTitleClick}
                  forKey={place.id + place.city + index}
                  onCardMouseEnter={onCardMouseEnter}
                  onCardMouseOut={onCardMouseOut}
                  key = {Date.now() + index}
                />;
              }
          )
        }
      </div>
    );
  }
}

PlacesList.propTypes = {
  onMainTitleClick: PropTypes.func.isRequired,
  places: PropTypes.array.isRequired,
};

export default PlacesList;
