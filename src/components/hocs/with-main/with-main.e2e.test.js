import React from "react";
import Enzyme, {
  mount
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withMain from './with-main.js';
import PropTypes from "prop-types";

// import configureStore from "redux-mock-store";

// const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

// const store = mockStore({
//   activeSortingList: false,
//   isOpen: false,
//   activeOffer: null,
//   typeSorting: `Popular`
// });

const place = [{
  id: 0,
  city: `Amsterdam`,
  type: `Apartament`,
  description: `Beautiful & luxurious apartment at great location`,
  price: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinate: [52.3909553943508, 4.85309666406198],
  mainPhoto: `img/apartment-01.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
  `, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
  `, `и пусть весь мир подождет..`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Angelina`
  }
}];

const MockComponent = (props) => {
  const {onSortingTypeClick, onCardMouseEnter, onCardMouseOut, typeSorting} = props;
  const type = `price`;
  return (
    <div>
      <header onMouseEnter={() => {
        onCardMouseEnter(place.id);
      }}
      onMouseLeave={onCardMouseOut}
      > Coming or Out</header>
      <h2 onClick={() => {
        onSortingTypeClick(type);
      }}>{typeSorting}</h2>
    </div>
  );
};

MockComponent.propTypes = {
  typeSorting: PropTypes.string.isRequired,
  onSortingTypeClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
};
const MockComponentWrapped = withMain(MockComponent);

describe(`test withMain e2e`, () => {
  test(`Should  change MockedHoc state when clicked`, () => {
    const onMainTitleClick = jest.fn();
    const onCityNameClick = jest.fn();
    const onCardMouseOut = jest.fn();
    const onCardMouseEnter = jest.fn();
    const onSortingTypeClick = jest.fn();

    const hocComponent = mount(
        <MockComponentWrapped
          typeSorting ={`popuar`}
          town={`Amsterdam`}
          place = {
            place
          }
          places = {
            place
          }
          onMainTitleClick = {
            onMainTitleClick
          }
          onCityNameClick = {
            onCityNameClick
          }
          onCardMouseOut = {
            onCardMouseOut
          }
          onCardMouseEnter = {
            onCardMouseEnter
          }
          onSortingTypeClick = {
            onSortingTypeClick
          }
          placesCount = {11}
        />
    );
    // ищем заголовок по которому можноы кликнуть
    const titleOnMain = hocComponent.find(`h2`);
    titleOnMain.simulate(`click`);

    // ожидаем что измениться store
    expect(hocComponent.props().typeSorting).toEqual(`price`);
    // --??? но  неработает  Максим посмотри
  });

  // test(`Should  change MockedHoc state when mouse comming  `, () => {
  // });

  // test(`Should  change MockedHoc state when mouse out`, () => {
  // });
});
