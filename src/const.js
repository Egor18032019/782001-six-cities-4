import {getOffers} from "./reducer/data/data-reducer.js";
const CITYLIST = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

// const offers = getOffers();
// const CityCurrentList = [...new Set(offers.map((offer) => offer.city))];
// console.log(offers);
// console.log(CityCurrentList);
const SORTING = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`,
];

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  MAIN: `/main`,
  PROPERTY: `/property`,
  FAVORITES: `/favorites`,
  // AMSTERDAM: `/Amsterdam`,
};

export {
  CITYLIST,
  SORTING,
  AppRoute,
  // CityCurrentList
};
