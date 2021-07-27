interface ListPageProduct {
  title: string;
  author: string;
  yearPublished: number;
  thumbnail: ImageDataLike;
  slug: string;
}

interface SinglePageProduct {
  title: string;
  author: string;
  blurb1: string;
  blurb2: string;
  publishedDate: Date;
  galleryImages: ImageDataLike[];
  priceId: string;
}

interface BasketProduct {
  thumbnail: ImageDataLike;
  title: string;
  author: string;
  slug: string;
  price: number;
  inventory: number;
  id: string;
  priceId: string;
}

interface ApiSinglePageProduct {
  id: number;
  blurb1: string;
  blurb2: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  gallery_images: { localFile: StrapiGatsbyImage }[];
  thumbnail_image: StrapiGatsbyImage;
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  inventory: number;
  devPriceId: string;
  prodPriceId: string;
  thumbnail: string;
  price: number;
  images: {
    fullSize: string[];
  };
}

interface ApiFullProduct {
  id: number;
  blurb1: string;
  blurb2: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  gallery_images: StrapiGatsbyImage[];
  thumbnail_image: StrapiGatsbyImage;
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  inventory: number;
  devPriceId: string;
  prodPriceId: string;
  thumbnail: string;
  price: number;
  images: {
    fullSize: string[];
  };
}

interface ApiListPageProduct {
  thumbnail_image: StrapiGatsbyImage;
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  price: number;
}

interface ProductQuantityById {
  [index: string]: number;
}
