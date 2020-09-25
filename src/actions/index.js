import shop from "../api/shop";
import * as types from "../constants/actionTypes";

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

export const fetchVideos = () => (dispatch) =>
  shop.getVideos().then((videos) => {
    dispatch(receiveVideos(videos));
  });

export const fetchProducts = () => (dispatch) =>
  shop.getProducts().then((products) => {
    dispatch(receiveProducts(products));
  });

const addToBasketUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToBasket = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToBasketUnsafe(productId));
  }
};

export const setShipping = (shippingInfo) => (dispatch) => {
  console.log(shippingInfo, "action");
  dispatch({
    type: types.SET_SHIPPING,
    shipping: shippingInfo,
  });
};

const isInBasket = (cart, productId) => cart.addedIds.indexOf(productId) !== -1;

export const decrementInCart = (productId) => (dispatch, getState) => {
  const state = getState();
  if (isInBasket(state.cart, productId)) {
    dispatch({ type: types.DECREMENT_IN_CART, productId });
  }
};

export const removeFromBasket = (productId, quantityToReplace) => (
  dispatch,
  getState
) => {
  const state = getState();
  if (isInBasket(state.cart, productId)) {
    dispatch({ type: types.REMOVE_FROM_CART, productId, quantityToReplace });
  }
};

export const checkout = (products) => (dispatch, getState) => {
  const state = getState();
  const productsById = state.products.byId;
  const { shipping } = state.cart;
  const ids = Object.keys(products);
  const quantityByPriceId = ids.map((id) => {
    const priceAndQuantity = {
      id: id,
      priceId: productsById[id].priceId,
      quantity: products[id],
    };
    return priceAndQuantity;
  }, []);
  quantityByPriceId.push({
    id: "shipping",
    priceId: shipping.priceId,
    quantity: 1,
  });
  shop.buyProducts(quantityByPriceId);
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
