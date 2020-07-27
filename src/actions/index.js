import shop from "../api/shop";
import * as types from "../constants/actionTypes";

const receiveProducts = (products) => {
  console.log(products);
  return {
    type: types.RECEIVE_PRODUCTS,
    books: products.books,
  };
};

const receiveVideos = (videos) => {
  console.log(videos, videos.books, "videos");
  return {
    type: types.RECEIVE_VIDEOS,
    videos: videos,
  };
};

export const getAllProducts = () => (dispatch) => {
  shop.getProducts((products) => {
    dispatch(receiveProducts(products));
  });
};

export const getAllVideos = () => (dispatch) => {
  shop.getVideos((videos) => {
    dispatch(receiveVideos(videos));
  });
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

export const checkout = (products) => (dispatch, getState) => {
  const { cart } = getState();

  dispatch({
    type: types.CHECKOUT_REQUEST,
  });
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart,
    });
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  });
};
