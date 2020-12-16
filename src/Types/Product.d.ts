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