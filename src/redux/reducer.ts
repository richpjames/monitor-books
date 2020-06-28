import { Reducer } from "redux";

import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SUB_QUANTITY,
  EMPTY_CART,
} from "./actionTypes";

const initialState = {
  products: [],
};

const basketReducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map((product: any) =>
          product.id === action.id ? { ...product, selected: true } : product
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map((product: any) =>
          product.id === action.id
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: any) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        products: state.products.map((product: any) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        products: state.products.map((product: any) =>
          product.selected
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    default:
      return state;
  }
};
export default basketReducer;
