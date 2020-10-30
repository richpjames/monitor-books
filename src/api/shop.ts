import { getVideos } from "./videos";
// import { getDevBooks } from "./devBooks";
import { getProdBooks } from "./prodBooks";
import { handleCheckout } from "./stripe-purchase";

export default {
  getProducts: getProdBooks,
  getVideos: getVideos,
  buyProducts: handleCheckout,
};
