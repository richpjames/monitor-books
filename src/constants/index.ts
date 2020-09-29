const devShippingCosts = [
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

const productionShippingCosts = [
  { region: "UK", priceId: "price_1HOpaOJs9ciiqN7OcNEPQA7G", price: 2.5 },
  {
    region: "Europe",
    priceId: "price_1HOpaOJs9ciiqN7OcRyOPBkG",
    price: 4,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HOpaOJs9ciiqN7Oxtqh00zC",
    price: 5,
  },
];

export const shippingCosts: Shipping[] =
  process.env.NODE_ENV === "production"
    ? productionShippingCosts
    : devShippingCosts;

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

//COLOUR DEFINITIONS
export const _offWhite = "#FAFAFA";
export const _offOffWhite = "#ebebeb";
export const _purp = "#02003D";
export const _darkGrey = "#141414";

//COLOUR USAGE
export const text = _darkGrey;
export const background = _offWhite;

//URLS
export const mainImageUrl = `https://www.richjames.co.uk/img/`;
export const homePage = "/books/propositions";
export const productsPageName = "books";

//IMAGES
export const productPageImageHeight = "15vw";
export const productPageImageWidth = "auto";

export const introTimer = 4;
