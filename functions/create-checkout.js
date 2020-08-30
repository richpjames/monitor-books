import { SUPPORTED_LOCATIONS } from "./constants";
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
const liveInventory = require("./data/live/books.json");
const devInventory = require("./data/dev/books.json");

const inventory =
  process.env.NODE_ENV === "production" ? liveInventory : devInventory;

exports.handler = async (event) => {
  const { id, quantity } = JSON.parse(event.body);
  const product = inventory.find((p) => p.id === id);

  const validatedQuantity = quantity > 0 < 11 ? quantity : 1;
  console.log(event, "event");

  console.log(product, "product");
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: SUPPORTED_LOCATIONS,
    },
    success_url: `${process.env.URL}/success.html`,
    cancel_url: process.env.URL,

    line_items: [
      {
        price: "price_1HF3WIJs9ciiqN7OElxdqBnZ",
        quantity: validatedQuantity,
      },
    ],
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
    }),
  };
};
