export const shippingCosts: Shipping[] = [
  { region: "UK", priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp", price: 2.5 },
  {
    region: "Europe",
    priceId: "price_1HMwTgJs9ciiqN7OwbLHDoty",
    price: 4,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HMwTgJs9ciiqN7OBWk2Jv6a",
    price: 5,
  },
];

export const initialState = {
  cart: {
    addedIds: [],
    quantityById: {},
    shipping: shippingCosts[0],
  },
  shippingCosts: shippingCosts,
  products: { byId: {}, visibleIds: [] },
  videos: { byId: {}, visibleIds: [] },
};

//COLOURS
export const offWhite = "#eef0f2";
export const offOffWhite = "#ebebeb";

//URLS
export const mainImageUrl = `https://www.richjames.co.uk/img/`;

//IMAGES
export const productPageImageHeight = "15vw";
export const productPageImageWidth = "auto";
