import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  DECREMENT_IN_CART,
} from "../constants/actionTypes";

const initialState: InitialState = {
  addedIds: [],
  quantityById: {},
};

interface InitialState {
  addedIds: string[];
  quantityById: { [key: string]: string };
}
type CartAction = {
  type: Action;
  productId: string;
  cart: Cart;
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
    case CHECKOUT_REQUEST:
      return initialState;
    case CHECKOUT_FAILURE:
      return action.cart;
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
      };
  }
};

export default cart;
