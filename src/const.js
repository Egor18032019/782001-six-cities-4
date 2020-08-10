const CITYLIST = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

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
  PROPERTY: `/offer/:id`,
  FAVORITES: `/favorites`,
  // AMSTERDAM: `/Amsterdam`,
};

const Months = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const ratingList = [
  {
    value: 5,
    title: `perfect`
  },
  {
    value: 4,
    title: `good`
  },
  {
    value: 3,
    title: `not bad`
  },
  {
    value: 2,
    title: `badly`
  },
  {
    value: 1,
    title: `terribly`
  },
];

export {
  CITYLIST,
  SORTING,
  AppRoute,
  Months,
  ratingList
};
