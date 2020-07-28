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

interface State {
  products: { byId: { [id: string]: Book }; visibleIds: string[] };
  videos: { byId: { [id: string]: Video }; visibleIds: string[] };
  cart: { addedIds: string[]; quantityById: { string: number } };
}
