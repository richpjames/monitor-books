export const shippingCosts: Shipping[] = [
  { region: "UK", priceId: "price_1JriFbJs9ciiqN7OkgQse0lh", price: 3 },
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

//URLS
export const homePage = "propositions";
export const productsPageName = "books";

export const introTimer = 4;

export const introTimerMilliseconds = introTimer * 1000;

export const mobileBreakpoint = "800px";

//STRIPE
export const stripePublishableKey =
  process.env.GATSBY_PROD_STRIPE_PUBLISHABLE_KEY;
