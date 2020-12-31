import { getVideos } from "./videos";
import { getDevBooks } from "./devBooks";
import { getProdBooks } from "./prodBooks";
import { handleCheckout } from "./stripe-purchase";

export default {
  getProducts:
    process.env.NODE_ENV === "development" ? getDevBooks : getProdBooks,
  getVideos: getVideos,
  buyProducts: handleCheckout,
};
