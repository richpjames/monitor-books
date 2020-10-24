import { StripeError, loadStripe } from "@stripe/stripe-js";

type stripeResponse = undefined | { error: StripeError };

export async function handleCheckout(data: any) {
  let publishableKey;
  let endpoint;
  if (process.env.NODE_ENV === "production") {
    publishableKey = process.env.REACT_APP_PROD_PUBLISHABLE_KEY;
    endpoint = "/.netlify/functions/create-prod-checkout";
  } else {
    publishableKey = process.env.REACT_APP_DEV_PUBLISHABLE_KEY;
    endpoint = "/.netlify/functions/create-dev-checkout";
  }

  const stripe = await loadStripe(publishableKey || "");
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (stripe) {
    const stripeResponse: stripeResponse = await stripe.redirectToCheckout({
      sessionId: response.sessionId,
    });

    if (stripeResponse?.error) {
      console.log(stripeResponse.error);
    }
  }
}
