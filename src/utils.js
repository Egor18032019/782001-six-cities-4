const getFilterOffersOnCity = (array, town) => {
  return array.filter((element) => element.city === town);
};


export {
  getFilterOffersOnCity
};
