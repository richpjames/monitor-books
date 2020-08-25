import { getVideos } from "./videos";
import { getBooks } from "./books";
import { handleCheckout } from "./stripe-purchase";

export default {
  getProducts: getBooks,
  getVideos: getVideos,
  buyProducts: handleCheckout,
};
