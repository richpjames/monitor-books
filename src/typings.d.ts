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
interface Products {
  byId: ProductsById;
  visibleIds: VisibileIds;
}
type ProductsById = ById<Product>;
interface ProductsAction {
  type: PRODUCTS_ACTIONS;
  products: Product[];
  quantityToReplace: number;
  productId: string;
}
interface ProductQuantityById {
  [index: string]: number;
}

interface Video {
  title: string;
  creators: [string];
  description1: string;
  description2: string;
  url: string;
  publishDate: string;
  slug: string;
  thumbnail;
}

interface Cart {
  addedIds: AddedIds;
  quantityById: ProductQuantityById;
  shipping: Shipping;
  loading: boolean;
  config: { showSlideshow: boolean; hasError: boolean };
}

type CartAction = {
  type: CART_ACTIONS | CHECKOUT_ACTIONS;
  productId: string;
  cart?: Cart;
  shipping?: Shipping;
  loadingCheckout?: boolean;
};

type AddedIds = string[];
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

type ById<T> = { [id: string]: T };
type VisibileIds = string[];

interface Videos extends Products {
  byId: ById<Video>;
}

type InitialState = {
  cart: Cart;
  products: { byId: {}; visibleIds: [] };
  videos: { byId: {}; visibleIds: [] };
  shippingCosts: Shipping[];
};
//CART ACTIONS
type CART_ACTIONS =
  | ADD_TO_CART
  | REMOVE_FROM_CART
  | DECREMENT_IN_CART
  | SET_SHIPPING;

type ADD_TO_CART = "ADD_TO_CART";
type REMOVE_FROM_CART = "REMOVE_FROM_CART";
type DECREMENT_IN_CART = "DECREMENT_IN_CART";
type SET_SHIPPING = "SET_SHIPPING";

type PRODUCTS_ACTIONS = RECEIVE_PRODUCTS | ADD_TO_CART | REMOVE_FROM_CART;

//CHECKOUT ACTIONS
type CHECKOUT_ACTIONS =
  | CHECKOUT_INITIALISE
  | CHECKOUT_REQUEST
  | CHECKOUT_SUCCESS
  | CHECKOUT_FAILURE
  | LOADING_CHECKOUT;

type CHECKOUT_INITIALISE = "CHECKOUT_INITIALISE";
type CHECKOUT_REQUEST = "CHECKOUT_REQUEST";
type CHECKOUT_SUCCESS = "CHECKOUT_SUCCESS";
type CHECKOUT_FAILURE = "CHECKOUT_FAILURE";
type LOADING_CHECKOUT = "LOADING_CHECKOUT";

//DATA ACTIONS

type DATA_ACTIONS = RECEIVE_PRODUCTS | RECEIVE_VIDEOS;

type RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS";
type RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

type SHOWN_INTRO_SLIDE = "SHOWN_INTRO_SLIDE";
