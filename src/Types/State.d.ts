interface State {
  products: Products;
  videos: Videos;
  cart: Cart;
  shippingCosts: Shipping[];
  config: Config;
}

type AddedIds = string[];
type ById<T> = { [id: string]: T };
type VisibleIds = string[];
type GetState = () => State;

type InitialState = {
  cart: Cart;
  products: { byId: {}; visibleIds: [] };
  videos: { byId: {}; visibleIds: [] };
  shippingCosts: Shipping[];
};
