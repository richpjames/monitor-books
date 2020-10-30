const SUPPORTED_LOCATIONS = require("./constants");
const devStripe = require("stripe")(
  process.env.REACT_APP_DEV_STRIPE_SECRET_KEY
);
const prodStripe = require("stripe")(
  process.env.REACT_APP_PROD_STRIPE_SECRET_KEY
);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const products = data.data;
  const env = data.env;
  console.log("create checkout env", env);
  console.log("create checkout prods", products);

  let stripe = devStripe;
  let publishableKey = process.env.REACT_APP_DEV_STRIPE_PUBLISHABLE_KEY;
  if (env === "production") {
    stripe = prodStripe;
    publishableKey = process.env.REACT_APP_PROD_STRIPE_PUBLISHABLE_KEY;
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    billing_address_collection: "required",
    shipping_address_collection: {
      allowed_countries: SUPPORTED_LOCATIONS,
    },
    success_url: `${process.env.URL}/success`,
    cancel_url: process.env.URL,

    line_items: products.map((product) => {
      const validatedQuantity =
        product.quantity > 0 < 11 ? product.quantity : 1;

      const lineItem = {
        price: product.priceId,
        quantity: validatedQuantity,
      };
      return lineItem;
    }),
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      sessionId: session.id,
      publishableKey: publishableKey,
    }),
  };
};
