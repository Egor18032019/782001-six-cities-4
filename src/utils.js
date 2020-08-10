const getFilterOffersOnCity = (array, town) => {
  return array.filter((element) => element.city === town);
};

const getFilterOffersOnID = (array, matchId) => {
  return array.filter((element) => element.id === matchId);
};

const getFiletReviews = (data) => {
  return {
    text: data[`comment`],
    date: data[`date`],
    id: data[`id`],
    rating: data[`rating`],
    user: {
      avatar: data[`user`][`avatar_url`],
      id: data[`user`][`id`],
      isPro: data[`user`][`is_pro`],
      name: data[`user`][`name`]
    }
  };
};

export {
  getFilterOffersOnCity,
  getFilterOffersOnID,
  getFiletReviews
};
