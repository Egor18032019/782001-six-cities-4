import React from "react";
import Enzyme, {
  mount
} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CityList from "./city-list.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const PLACE = {
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
};

import {
  CITYLIST
} from "../../const.js";

describe(`test CityList e2e`, () => {
  it(`click title or no click`, () => {
    const onCityNameClick = jest.fn();

    const cityTitleList = mount(
        <CityList
          town = {
            PLACE.city
          }
          onCityNameClick = {
            onCityNameClick
          }
          cityList={
            CITYLIST
          }
        />
    );
    const titleOnMain = cityTitleList.find(`.locations__item-link`);
    titleOnMain.forEach(
        (title) => {
          title.simulate(`click`);
        });
    expect(onCityNameClick.mock.calls.length).toBe(CITYLIST.length);
  });

  it(`Should  first city title be pressed`, () => {
    const onCityNameClick = jest.fn();

    const cityTitleList = mount(<CityList
      town = {
        PLACE.city
      }
      onCityNameClick = {
        onCityNameClick
      }
    />
    );
    const titleOnMain = cityTitleList.find(`.locations__item-link`);
    titleOnMain.at(0).simulate(`click`);
    expect(onCityNameClick.mock.calls.length).toBe(1);
  });

});
