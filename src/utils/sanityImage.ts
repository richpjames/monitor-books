import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "djdzl2ed",
  dataset: "production",
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: new Date().toISOString().split("T")[0], // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
