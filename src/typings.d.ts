interface Product {
  title: string;
  author: string;
  photos: number[];
  blurb1: string;
  blurb2: string;
  price: string;
  publishDate: string;
  imagePath: string;
  id: string;
  slug: string;
  inventory: number;
  thumbnail: string;
  priceId: string;
}
interface Video {
  title: string;
  creator: string;
  description1: string;
  description2: string;
  url: string;
  publishDate: string;
  slug: string;
  thumbnail;
}

interface Cart {
  addedIds: string[];
  quantityById: { [index as string]: string };
  shipping: Shipping;
  hasError: boolean;
  loading: false;
}

interface Shipping {
  region: string;
  price: number;
  priceId: string;
}

interface Config {
  showSlideshow: boolean;
}

interface State {
  products: Products;
  videos: Videos;
  cart: Cart;
  shippingCosts: Shipping[];
  config: Config;
}

type byId<T> = { [id: string]: T };
type visibileIds = string[];
interface Products {
  byId: byId<Product>;
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
  | "SET_SHIPPING"
  | "LOADING_CHECKOUT"
  | "CHECKOUT_INITIALISE";

type InitialState = {
  cart: Cart;
  products: { byId: {}; visibleIds: [] };
  videos: { byId: {}; visibleIds: [] };
  shippingCosts: Shipping[];
};
