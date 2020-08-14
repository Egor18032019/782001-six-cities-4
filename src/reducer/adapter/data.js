
// пишем фунцкию которая принимает на вход серверные данные и преобразовывает их в нормальные
const adapter = (serverdata) => {
  return serverdata.map((it) => {
    return {
      id: it.id,
      city: it.city.name,
      locationCity: [it.city.location.latitude, it.city.location.longitude, it.city.location.zoom], // прописать в компоненте Map
      type: it.type,
      description: it.description,
      title:	it.title, // посмотреть где это применяется
      price: it.price,
      isBookmark: it.is_favorite,
      isPremium: it.is_premium,
      rating: it.rating,
      coordinate: [it.location.latitude, it.location.longitude, it.location.zoom],
      mainPhoto: it.preview_image,
      bedrooms: it.bedrooms,
      maxAdults: it.max_adults,
      options: it.goods,
      images: it.images,
      stories: it.description,
      host: {
        id: it.host.id, // посмотреть где это применяется
        avatarUrl: it.host.avatar_url,
        isPro: it.host.is_pro,
        name: it.host.name,
        description:	it.host.description, // посмотреть где это применяется
      }
    };
  });
};
export {
  adapter,
};
