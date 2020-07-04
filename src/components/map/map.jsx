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
const icon = leaflet.icon({
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
});

class Map extends PureComponent {
  constructor(props) {
    super(props);
    // добавляем реф чтобы карта знала куда отрисовываться
    this.mapCity = createRef();
  }

  componentDidMount() { // --??? почему если тут использовать функцию initMap() а потом передать в render() она не срабатывает?
    // отриcoвка карты
    // инциализируем карту и установим фокус на определённую область(город)
    // this.mapCity(в документации `mapid` , в задание `map`) место куда отрисовываем карту
    this.map = leaflet.map(this.mapCity.current, {
      center: city.center,
      zoom: city.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city.center, city.zoom);
    // подключим слой карты.
    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this._addPoints();
  }

  componentWillUnmount() {
    this.map = null;
  }

  componentDidUpdate() {
    // ????    как почистить карту ?
    // если     this.map = null; он всё равно пишет что контейнер занят
    this._addPoints();
  }

  // отрисовка точек
  _addPoints() {
    // console.log(this.props.places);
    // форычом проходим по пропсам и о leaferom отрисовываем place.coordinate
    this.props.places.forEach((place) => {
      // отрисовка точек
      leaflet
      .marker(place.coordinate, icon) // убрал скобки у icon-работает без них
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
};
