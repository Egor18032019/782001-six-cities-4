import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";


const city = {
  name: `Amsterdam`,
  center: [52.38333, 4.9],
  zoom: 12
};
// конфигурируем иконку-маркер
// - цвет иконки узнать где??
// const icon = leaflet.icon({
//   iconUrl: `img/pin.svg`,
//   iconSize: [30, 30]
// });

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
  }

  componentWillUnmount() {
    this.map = null;
  }

  componentDidUpdate() {
    this.removeMap();
    this.addMap();
    this._addPoints();
  }

  _addPoints() {
    const {places, activeOffer} = this.props;
    // форычом проходим по пропсам и о leaferom отрисовываем по place.coordinate-ам
    places.forEach((place) => {
      const activeIcon = (place.id === activeOffer) ? `img/pin-active.svg` : `img/pin.svg`;
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
      <section className="cities__map map">
        <div id="map" style={{height: `100%`, width: `100%`}} ref={this.mapCity}>
          {/* {this.initMap()} */}
        </div>
      </section>

    );
  }
}

export default Map;

Map.propTypes = {
  places: PropTypes.array.isRequired,
  activeOffer: PropTypes.number,
  // activeOffer: PropTypes.oneOfType([
  //   PropTypes.number.isRequired,
  //   PropTypes.oneOf([null]).isRequired,
  // ]).isRequired,
  // --??? Максим как указать нулл  в проптайпсах??,,,,,,,,,,,,,,,,,,,,,,,,,,,,???????????????????????????
};
