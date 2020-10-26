import { combineReducers } from "redux";
import { shippingCosts } from "../constants";
import cart, * as fromCart from "./cart";
import products, * as fromProducts from "./products";
import videos from "./videos";
import { slideshow as config } from "./config";

export default combineReducers({
  cart,
  products,
  videos,
  shippingCosts: (state = shippingCosts) => state,
  config,
});

const getAddedIds = (state) => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = (state) => {
  return getAddedIds(state)
    .reduce(
      (total, id) =>
        total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2);
};
export const getCartProducts = (state) =>
  getAddedIds(state).map((id) => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id),
  }));
