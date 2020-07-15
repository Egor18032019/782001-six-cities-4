import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class EmptyPlaces extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {town} = this.props;
    return (
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property availbale at the moment in {town}</p>
        </div>
      </section>
    );
  }
}

EmptyPlaces.propTypes = {
  town: PropTypes.string.isRequired,
};

export default EmptyPlaces;
