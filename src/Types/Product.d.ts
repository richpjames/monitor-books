interface ListPageProduct {
  title: string;
  author: string;
  yearPublished: number;
  thumbnail: ImageDataLike;
  slug: string;
  productType: string;
}

interface SinglePageProduct {
  title: string;
  author: string;
  blurb1: PortableTextBlock;
  blurb2: PortableTextBlock;
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
  priceId: string;
}

interface ApiSinglePageProduct {
  id: number;
  _rawBlurb1: string;
  _rawBlurb2: string;
  date_published: string;
  created_at: string;
  updated_at: string;
  photos: { asset: StrapiGatsbyImage }[];
  thumbnail_image: StrapiGatsbyImage;
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  inventory: number;
  price_id: string;
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
  thumbnail_image: { asset: { gatsbyImage: StrapiGatsbyImage } };
  title: string;
  author: string;
  publishedDate: string;
  slug: string;
  inventory: number;
  price_id: string;
  thumbnail: string;
  price: number;
  images: {
    fullSize: string[];
  };
}

interface ApiListPageProduct {
  thumbnail_image: { asset: any };
  title: string;
  author: string;
  date_published: string;
  slug: string;
  price: number;
  productType: string;
}

interface ProductQuantityById {
  [index: string]: number;
}
