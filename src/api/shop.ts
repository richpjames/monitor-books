import { getVideos } from "./videos";
import { getDevBooks } from "./devBooks";
import { getProdBooks } from "./prodBooks";
import { handleCheckout } from "./stripe-purchase";

export default {
  getProducts:
    process.env.NODE_ENV !== "production" ? getProdBooks : getDevBooks,
  getVideos: getVideos,
  buyProducts: handleCheckout,
};
