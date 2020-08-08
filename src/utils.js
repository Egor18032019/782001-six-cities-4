const getFilterOffersOnCity = (array, town) => {
  return array.filter((element) => element.city === town);
};

const getFilterOffersOnID = (array, matchId) => {
  return array.filter((element) => element.id === matchId);
};
export {
  getFilterOffersOnCity,
  getFilterOffersOnID
};
