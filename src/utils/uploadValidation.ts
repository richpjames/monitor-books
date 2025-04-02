import { HandlerEvent } from "@netlify/functions";

// Add allowed origins
const ALLOWED_ORIGINS = [
  "https://monitorbooks.co.uk",
  "https://www.monitorbooks.co.uk",
  // Include localhost for development
  "http://localhost:8000",
];

// Add allowed paths
const ALLOWED_PATHS = ["/submissions"];

export const uploadValidation = (event: HandlerEvent) => {
  // Check origin
  const origin = event.headers.origin;
  const referer = event.headers.referer;

  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Unauthorized origin" }),
    };
  }

  // Check referer path
  if (!referer) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Missing referer" }),
    };
  }

  const refererUrl = new URL(referer);
  if (!ALLOWED_PATHS.includes(refererUrl.pathname)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ error: "Unauthorized path" }),
    };
  }

  // Add CORS headers
  const headers = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  // Basic validation
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "No file uploaded" }),
    };
  }
};
