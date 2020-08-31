import { StripeError, loadStripe } from "@stripe/stripe-js";

type stripeResponse = undefined | { error: StripeError };

export async function handleCheckout(data: any) {
  const stripe = await loadStripe(
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || ""
  );
  const response = await fetch("/.netlify/functions/create-checkout", {
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
