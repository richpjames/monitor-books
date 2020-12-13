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

const getAddedIds = (cart: Cart) => fromCart.getAddedIds(cart);

const getQuantity = (cart: Cart, id: string) => fromCart.getQuantity(cart, id);

const getProduct = (products: ProductQuantityById, id: string) =>
  fromProducts.getProduct(products, id);

export const getTotal = (state: State) => {
  return getAddedIds(state.cart)
    .reduce(
      (total, id) =>
        total +
        getProduct(state.cart.quantityById, id).price *
          getQuantity(state.cart, id),
      0
    )
    .toFixed(2);
};
export const getCartProducts = (state: State) =>
  getAddedIds(state.cart).map((id) => ({
    ...getProduct(state.cart.quantityById, id),
    quantity: getQuantity(state.cart, id),
  }));
