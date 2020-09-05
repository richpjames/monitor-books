interface Book {
  title: string;
  author: string;
  photos: number[];
  blurb1: string;
  blurb2: string;
  price: string;
  publishDate: string;
  slug: string;
  id: string;
  inventory: number;
  path: string;
  thumbnail: string;
}
interface Video {
  title: string;
  creator: string;
  description1: string;
  description2: string;
  url: string;
  publishDate: string;
  slug: string;
}

interface Cart {
  addedIds: string[];
  quantityById: { [index as string]: string };
  shipping: Shipping;
}

interface Shipping {
  region: string;
  price: number;
  priceId: string;
}

interface State {
  products: Products;
  videos: Videos;
  cart: Cart;
  shippingCosts: Shipping[];
}

type byId<T> = { [id: string]: T };
type visibileIds = string[];
interface Products {
  byId: byId<Book>;
  visibleIds: visibileIds;
}
interface Videos extends Products {
  byId: byId<Video>;
}

type Action =
  | "ADD_TO_CART"
  | "CHECKOUT_REQUEST"
  | "CHECKOUT_FAILURE"
  | "CHECKOUT_SUCCESS"
  | "REMOVE_FROM_CART"
  | "DECREMENT_IN_CART"
  | "SET_SHIPPING";

type InitialState = {
  cart: Cart;
  products: { byId: {}; visibleIds: [] };
  videos: { byId: {}; visibleIds: [] };
  shippingCosts: Shipping[];
};
