import { productMapper, videoMapper } from "../api/mappers";
import { Dispatch } from "redux";
import shop from "../api/shop";
import * as types from "../constants/actionTypes";

export const setShowSlideshow = (showSlideshow: boolean) => {
  return { type: types.SHOWN_INTRO_SLIDE, showSlideshow };
};

export const setLoading = (loadingCheckout: boolean) => {
  return { type: types.LOADING_CHECKOUT, loadingCheckout };
};
const receiveProducts = (products: ApiProduct[]) => {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
      ? products
          .map(productMapper)
          .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
      : [],
  };
};

const receiveVideos = (videos: ApiVideo[]) => {
  return {
    type: types.RECEIVE_VIDEOS,
    videos: videos
      ? videos
          .map(videoMapper)
          .sort((a, b) => b.publishedDate.getTime() - a.publishedDate.getTime())
      : [],
  };
};
type receiveVideos = (videos: ApiVideo) => { type: string; videos: Video[] };

export const fetchVideos = () => (dispatch: Dispatch) => {
  shop.getVideos().then((videos: ApiVideo[]) => {
    dispatch(receiveVideos(videos));
  });
};
type fetchVideos = () => () => void;

export const fetchProducts = () => (dispatch: Dispatch) =>
  shop.getProducts().then((products) => {
    dispatch(receiveProducts(products));
  });

const addToBasketUnsafe = (productId: string) => ({
  type: types.ADD_TO_CART,
  productId,
});

export const addToBasket = (productId: string) => (
  dispatch: Dispatch,
  getState: GetState
) => {
  const productsById = getState().products.byId;
  if (productsById[productId].inventory > 0) {
    dispatch(addToBasketUnsafe(productId));
  }
};

export const setShipping = (shippingInfo: Shipping) => (dispatch: Dispatch) => {
  dispatch({
    type: types.SET_SHIPPING,
    shipping: shippingInfo,
  });
};

const isInBasket = (cart: Cart, productId: string) =>
  cart.addedIds.indexOf(productId) !== -1;

export const decrementInCart = (productId: string) => (
  dispatch: Dispatch,
  getState: GetState
) => {
  const state = getState();
  if (isInBasket(state.cart, productId)) {
    dispatch({ type: types.DECREMENT_IN_CART, productId });
  }
};

export const removeFromBasket = (
  productId: string,
  quantityToReplace: number
) => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();
  if (isInBasket(state.cart, productId)) {
    dispatch({ type: types.REMOVE_FROM_CART, productId, quantityToReplace });
  }
};

export const checkout = (products: any) => (
  dispatch: Dispatch,
  getState: GetState
) => {
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
