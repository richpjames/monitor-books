const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const sessionId = event.queryStringParameters.sessionId;
  // Fetch the Checkout Session to display the JSON result on the success page
  const session = await stripe.checkout.sessions.retrieve(sessionId);
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: session,
    }),
  };
};
