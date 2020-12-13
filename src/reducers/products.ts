import { combineReducers } from "redux";
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../constants/actionTypes";
import { initialState } from "../constants/";

const products = (state: Product, action: ProductsAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        inventory: action.quantityToReplace + state.inventory,
      };
    default:
      return state;
  }
};

const byId = (state = initialState.products.byId, action: ProductsAction) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce(
          (obj: { [key: string]: Product }, product: Product) => {
            obj[product.id] = product;
            return obj;
          },
          {}
        ),
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        };
      }
      return state;
  }
};

const visibleIds = (state = {}, action: ProductsAction) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map((product) => product.id);
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  visibleIds,
});

export const getProduct = (state: Products, id: string) => {
  return state.byId[id];
};

export const getVisibleProducts = (state: Products) =>
  state.visibleIds.map((id) => getProduct(state, id));
