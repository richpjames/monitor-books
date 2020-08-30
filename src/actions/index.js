import shop from "../api/shop";
import * as types from "../constants/actionTypes";

export const fetchVideos = () => (dispatch) =>
  shop.getVideos().then((videos) => {
    dispatch(receiveVideos(videos));
  });

export const fetchProducts = () => (dispatch) =>
  shop.getProducts().then((products) => {
    dispatch(receiveProducts(products));
  });

const receiveProducts = (products) => {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products,
  };
};

const receiveVideos = (videos) => {
  return {
    type: types.RECEIVE_VIDEOS,
    videos: videos,
  };
};

const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

const isInBasket = (state, productId) =>
  state.cart.quantityById[productId] > 0 &&
  state.cart.addedIds.indexOf(productId) !== -1;

export const decrementInCart = (productId) => (dispatch, getState) => {
  const state = getState();
  if (isInBasket(state, productId)) {
    dispatch({ type: types.DECREMENT_IN_CART, productId });
  }
};

export const removeFromCart = (productId, quantityToReplace) => (
  dispatch,
  getState
) => {
  const state = getState();
  if (isInBasket(state, productId)) {
    dispatch({ type: types.REMOVE_FROM_CART, productId, quantityToReplace });
  }
};

export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();

  shop.buyProducts({ products });
  // dispatch({
  //   type: types.CHECKOUT_REQUEST,
  //   what: "what",
  // });

  dispatch({
    type: types.CHECKOUT_SUCCESS,
  });
  // Replace the line above with line below to rollback on failure:
  // dispatch({ type: types.CHECKOUT_FAILURE, cart })
};
