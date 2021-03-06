interface Video {
  title: string;
  artistNames: [string, string, string];
  blurb1: string;
  blurb2: string;
  url: string;
  publishedDate: Date;
  slug: string;
  thumbnail: string;
  id: string;
}
interface ApiVideo {
  id: number;
  title: string;
  publishedDate: string;
  slug: string;
  url: string;
  thumbnail: string;
  blurb1: string;
  blurb2: string;
  artists: { id: number; Name: string; Description: string }[];
}

interface Cart {
  addedIds: AddedIds;
  quantityById: ProductQuantityById;
  shipping: Shipping;
  loading: boolean;
  config: { hasError: boolean };
}
