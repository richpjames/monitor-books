export const productMapper = (product: {
  id: number;
  lefttext: string;
  righttext: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  inventory: number;
  devPriceId: string;
  prodPriceId: string;
  images: {
    fullSize: string[];
  };
}) => ({
  ...product,
  id: product.devPriceId,
  blurb1: product.lefttext,
  blurb2: product.righttext,
  photos: product.images?.fullSize,
});
