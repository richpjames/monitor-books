interface Shipping {
  region: string;
  price: number;
  priceId: string;
}

interface Skus {
  [index: string]: BasketProduct;
}
interface Cart {
  addedIds: AddedIds;
  quantityById: ProductQuantityById;
  shipping: Shipping;
  loading: boolean;
  config: { hasError: boolean };
}
