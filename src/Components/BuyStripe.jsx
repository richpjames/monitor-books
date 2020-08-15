import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51HEs5PJs9ciiqN7OQShM0LhEP0qKf2TFmnuLR003nkC3RQQtHB4Ih4MiDHAFtdAfsQpczSLdhiHhSblBVc533Rk100QQYrp7CL"
);

function BuyStripe() {
  const handleClick = async (event) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1HF3WIJs9ciiqN7OElxdqBnZ", // Replace with the ID of your price
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: "https://example.com/success",
      cancelUrl: "https://example.com/cancel",
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  return (
    <button role="link" onClick={handleClick}>
      Checkout
    </button>
  );
}
export default BuyStripe;
