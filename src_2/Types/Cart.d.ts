type CartAction = {
  type: CART_ACTIONS | CHECKOUT_ACTIONS;
  productId: string;
  cart?: Cart;
  shipping?: Shipping;
  loadingCheckout?: boolean;
};

interface Shipping {
  region: string;
  price: number;
  priceId: string;
}

interface Config {
  showSlideshow: boolean;
}
