import {
  ADD_TO_CART,
  SET_SHIPPING,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CHECKOUT_INITIALISE,
  REMOVE_FROM_CART,
  DECREMENT_IN_CART,
  CHECKOUT_SUCCESS,
  LOADING_CHECKOUT,
} from "../constants/actionTypes";

const initialState: InitialState = {
  addedIds: [],
  quantityById: {},
  shipping: {
    price: 2,
    priceId: "price_1HMwTgJs9ciiqN7OnYGR5rOp",
    region: "UK",
  },
  config: { showSlideshow: false, hasError: false },
};

interface InitialState {
  addedIds: string[];
  quantityById: { [key: string]: string };
  shipping: Shipping;
  config: { showSlideshow: boolean; hasError: boolean };
}
type CartAction = {
  type: Action;
  productId: string;
  cart: Cart;
  shipping: Shipping;
  loadingCheckout: boolean;
};

const addedIds = (state = initialState.addedIds, action: CartAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state;
      }
      return [...state, action.productId];
    case REMOVE_FROM_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state.filter((id) => id !== action.productId);
      }
      break;

    default:
      return state;
  }
};

const quantityById = (
  state = initialState.quantityById,
  action: CartAction
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.productId]: (+state[action.productId] || 0) + 1,
      };
    case DECREMENT_IN_CART:
      return {
        ...state,
        [action.productId]:
          state[action.productId] && +state[action.productId] - 1,
      };
    case REMOVE_FROM_CART:
      const { [action.productId]: amount, ...restOfState } = state;
      return restOfState;
    default:
      return state;
  }
};

export const getQuantity = (state: InitialState, productId: string) =>
  state.quantityById[productId] || 0;

export const getAddedIds = (state: InitialState) => {
  return state.addedIds;
};

const cart = (state = initialState, action: CartAction) => {
  switch (action.type) {
    case SET_SHIPPING:
      return { ...state, shipping: action.shipping };
    case CHECKOUT_INITIALISE:
      return { ...state, hasError: false };
    case LOADING_CHECKOUT:
      return { ...state, loading: action.loadingCheckout };
    case CHECKOUT_REQUEST:
      return state;
    case CHECKOUT_FAILURE:
      return { ...state, hasError: true };
    case CHECKOUT_SUCCESS:
      return initialState;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        shipping: state.shipping,
      };
  }
};

export default cart;
