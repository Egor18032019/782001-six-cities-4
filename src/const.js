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

export {
  CITYLIST,
  SORTING,
  AppRoute,
  Months
};
