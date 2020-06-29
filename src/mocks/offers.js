const mockSettings = [{
  id: 0,
  city: `Amsterdam`,
  type: `Apartament`,
  description: `Beautiful & luxurious apartment at great location`,
  prise: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinateX: 111,
  coordinateY: 111,
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
},
{
  id: 1,
  city: `Amsterdam`,
  type: `Private room`,
  description: `Wood and Stone`,
  prise: 80,
  isBookmark: true,
  isPremium: false,
  rating: 3,
  coordinateX: 111,
  coordinateY: 111,
  mainPhoto: `img/room.jpg`,
  bedrooms: 0,
  maxAdults: 2,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`И где тут что то будет написано`, `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
  `, `Быть в Амстердаме и не покурить?`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Monro`
  }
},
{
  id: 2,
  city: `Paris`,
  type: `House`,
  description: `big + warm + good`,
  prise: 120,
  isBookmark: false,
  isPremium: true,
  rating: 4.8,
  coordinateX: 111,
  coordinateY: 111,
  mainPhoto: `img/apartment-02.jpg`,
  bedrooms: 3,
  maxAdults: 4,
  options: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  stories: [`У нас всегда свежие булочки`, `А из окна площадь Эйфиля видна`, `Лувр где то рядом`],
  host: {
    avatarUrl: `img/avatar-angelina.jpg`,
    isPro: true,
    name: `Emanuel`
  }
}
];


export {
  mockSettings,
};
