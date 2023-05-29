import { StripeError, loadStripe } from "@stripe/stripe-js";

const publishableKey = process.env.REACT_APP_PROD_STRIPE_PUBLISHABLE_KEY;

type stripeResponse = undefined | { error: StripeError };

export async function handleCheckout(data: any) {
  const stripe = await loadStripe(publishableKey || "");

  try {
    const response = await fetch("/.netlify/functions/create-checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data, env: process.env.NODE_ENV }),
    }).then((res) => res.json());

    if (stripe) {
      const stripeResponse: stripeResponse = await stripe.redirectToCheckout({
        sessionId: response.sessionId,
      });

      if (stripeResponse?.error) {
        return stripeResponse?.error;
      }
    }
  } catch (e) {
    return e;
  }
}
