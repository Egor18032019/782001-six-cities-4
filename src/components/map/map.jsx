import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import {getOffersByActiveCity, getActiveTown} from "../../reducer/data/selectors.js";


// инициализируем переменую и позже переопределяем
let city;

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._map = null;
    // добавляем реф чтобы карта знала куда отрисовываться
    this.mapCity = createRef();
  }

  // отрисовка карты
  addMap() {
    this.map.setView(city.center, city.zoom);
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);
  }

  removeMap() {
    this.map.eachLayer((layer) => {
      layer.remove();
    });
  }

  componentDidMount() {
    // прописываем city два раза = при монтаже и обновлении
    city = {
      name: this.props.activeTown,
      center: this.props.activeOffers[0].coordinate,
      zoom: 13
    };
    // инциализируем контейнер для карты и установим фокус на определённую область(город)
    // this.mapCity(в документации `mapid` , в задание `map`) место куда отрисовываем карту
    this.map = leaflet.map(this.mapCity.current, {
      center: city.center,
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });
    this.addMap();
    this._addPoints();
    // console.log(`componentDidMount`);
  }

  componentWillUnmount() {
    this.map = null;
  }

  componentDidUpdate(prevProps) {
    // прописываем city два раза = при монтаже и обновлении
    city = {
      name: this.props.activeTown,
      center: this.props.activeOffers[0].coordinate,
      zoom: 13
    };
    if (this.props.activeTown !== prevProps.activeTown) {
      this.removeMap();
    }
    this.addMap();
    this._addPoints();
    // console.log(`componentDidUpdate`);
  }

  _addPoints() {
    const {activeOffer, activeOffers, nearbyOffers, matchId, offer} = this.props;
    let places = activeOffers;
    let marker = activeOffer;
    // .если пришел массив ближайших оферов то переопределяем
    if (nearbyOffers) {
      places = nearbyOffers.concat(offer);
      marker = matchId;
    }
    // форычом проходим по пропсам и о leaferom отрисовываем по place.coordinate-ам
    places.forEach((place) => {
      const activeIcon = (place.id === marker) ? `../img/pin-active.svg` : `../img/pin.svg`;
      const icon = leaflet.icon({
        iconUrl: activeIcon,
        iconSize: [30, 30]
      });
      // вызываем методы leaflet
      leaflet
        .marker(place.coordinate, {icon}) // без скобки не работает
        .addTo(this.map);
    });
  }

  render() {
    return (
      <div id="map" style={{height: `100%`, width: `100%`}} ref={this.mapCity}>
        {/* {this.initMap()} */}
      </div>

    );
  }
}

const mapStateToProps = (store) => {
  return {
    activeOffers: getOffersByActiveCity(store),
    activeTown: getActiveTown(store),
  };
};

Map.propTypes = {
  activeTown: PropTypes.string.isRequired,
  activeOffers: PropTypes.array.isRequired,
  offer: PropTypes.object,
  activeOffer: PropTypes.number,
  matchId: PropTypes.number,
  nearbyOffers: PropTypes.array,
};

export {Map};
export default connect(mapStateToProps)(Map); // первым стате а вторым фдиспатчеры

