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
    priceId: "price_1HpJWSJs9ciiqN7Olq3WUKe8",
    price: 4.5,
  },
  {
    region: "Rest Of The World",
    priceId: "price_1HpJXPJs9ciiqN7Ob1vNuQcq",
    price: 6.5,
  },
];

export const shippingCosts: Shipping[] =
  process.env.NODE_ENV === "production"
    ? productionShippingCosts
    : devShippingCosts;

//COLOUR DEFINITIONS
export const _offWhite = "#FAFAFA";
export const _offOffWhite = "#ebebeb";
export const _purp = "#02003D";
export const _darkGrey = "#141414";

//URLS
export const homePage = "propositions";
export const productsPageName = "books";

export const introTimer = 4;

export const introTimerMilliseconds = introTimer * 1000;

export const mobileBreakpoint = "600px"

//STRIPE
export const stripePublishableKey =
  process.env.GATSBY_ENV === "production"
    ? process.env.GATSBY_PROD_STRIPE_PUBLISHABLE_KEY
    : process.env.GATSBY_DEV_STRIPE_PUBLISHABLE_KEY;
