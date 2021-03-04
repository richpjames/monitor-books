const SUPPORTED_LOCATIONS = require("./constants");
const devStripe = require("stripe")(process.env.GATSBY_DEV_STRIPE_SECRET_KEY);
const prodStripe = require("stripe")(process.env.GATSBY_PROD_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  const products = data.lineItems;
  const env = data.env;
  console.log(data, products, env, "this is it");
  let stripe = devStripe;
  let publishableKey = process.env.GATSBY_DEV_STRIPE_PUBLISHABLE_KEY;

  if (env === "production") {
    stripe = prodStripe;
    publishableKey = process.env.GATSBY_PROD_STRIPE_PUBLISHABLE_KEY;
  }
  try {
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
          price: product.price,
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
  } catch (e) {
    return {
      statusCode: 400,
      body: e,
    };
  }
};
