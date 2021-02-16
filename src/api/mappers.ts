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
  thumbnail: string;
  images: {
    fullSize: string[];
  };
}) => {
  const {
    title,
    author,
    images,
    lefttext,
    righttext,
    publishedDate,
    slug,
    inventory,
    thumbnail,
    devPriceId,
    prodPriceId,
  } = product;
  return {
    title,
    author,
    images,
    slug,
    inventory,
    thumbnail,
    devPriceId,
    prodPriceId,
    id: devPriceId,
    publishedDate: new Date(publishedDate),
    priceId: devPriceId,
    blurb1: lefttext,
    blurb2: righttext,
    photos: images?.fullSize,
  };
};

export const videoMapper = (video: {
  id: number;
  title: string;
  publishedDate: string;
  slug: string;
  url: string;
  thumbnail: string;
  blurb1: string;
  blurb2: string;
  artists: { id: number; Name: string; Description: string }[];
}) => {
  const {
    id,
    title,
    publishedDate,
    slug,
    url,
    thumbnail,
    blurb1,
    blurb2,
    artists,
  } = video;
  const artistNames = artists.map((artist) => artist.Name);
  return {
    id,
    title,
    publishedDate: new Date(publishedDate),
    slug,
    url,
    thumbnail,
    blurb1,
    blurb2,
    artistNames,
  };
};
