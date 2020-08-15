type stringArray = string[];
type objArray = {}[];

const CITYLIST = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

const SORTING:stringArray = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`,
];

const AppRoute:any = {
  ROOT: `/`,
  LOGIN: `/login`,
  MAIN: `/main`,
  PROPERTY: `/offer/:id`,
  FAVORITES: `/favorites`,
};

const Months:stringArray = [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];

const ratingList:objArray = [
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
