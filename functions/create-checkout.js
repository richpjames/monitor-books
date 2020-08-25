const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);
const inventory = require("./data/books.json");

exports.handler = async (event) => {
  const { id, quantity } = JSON.parse(event.body);
  const product = inventory.find((p) => p.id === id);
  console.log(
    `${product} product, inventory: ${inventory[0].id} id: ${id}, event: ${event}`
  );
  const validatedQuantity = quantity > 0 < 11 ? quantity : 1;
  console.log(product);
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    billing_address_collection: "auto",
    shipping_address_collection: {
      allowed_countries: ["US", "CA", "GB"],
    },
    success_url: `${process.env.URL}/success.html`,
    cancel_url: process.env.URL,

    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: product.price,
          product_data: {
            name: product.title,
            description: product.blurb1,
            // // images: [product.image],
            // amount: product.price,
            // currency: product.currency,
          },
        },
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
