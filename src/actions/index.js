import { productMapper } from "../api/mappers";
import shop from "../api/shop";
import * as types from "../constants/actionTypes";

export const setShowSlideshow = (showSlideshow) => {
  return { type: types.SHOWN_INTRO_SLIDE, showSlideshow };
};

export const setLoading = (loadingCheckout) => {
  return { type: types.LOADING_CHECKOUT, loadingCheckout };
};
const receiveProducts = (products) => {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
      ? products
          .map(productMapper)
          .sort(
            (a, b) =>
              new Date(b.publishDate).getTime() -
              new Date(a.publishDate).getTime()
          )
      : [],
  };
};

const receiveVideos = (videos) => {
  return {
    type: types.RECEIVE_VIDEOS,
    videos: videos
      ? videos.sort(
          (a, b) =>
            new Date(b.publishDate).getTime() -
            new Date(a.publishDate).getTime()
        )
      : [],
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
  const productsById = getState().products.byId;
  if (productsById[productId].inventory > 0) {
    dispatch(addToBasketUnsafe(productId));
  }
};

export const setShipping = (shippingInfo) => (dispatch) => {
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

  setTimeout(() => {
    dispatch({ type: types.CHECKOUT_FAILURE });
  }, 5000);
};
