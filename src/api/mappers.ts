export const productMapper = (product: ApiProduct): Product => {
  const {
    title,
    author,
    images,
    blurb1,
    blurb2,
    publishedDate,
    slug,
    id,
    inventory,
    thumbnail,
    devPriceId,
    prodPriceId,
    price,
  } = product;
  return {
    title,
    author,
    slug,
    price,
    inventory,
    thumbnail,
    id,
    blurb1,
    blurb2,
    publishedDate: new Date(publishedDate),
    priceId: process.env.NODE_ENV === "development" ? devPriceId : prodPriceId,
    photos: images?.fullSize,
  };
};

export const videoMapper = (video: ApiVideo) => {
  const {
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
    title,
    publishedDate: new Date(publishedDate),
    id: url,
    slug,
    url,
    thumbnail,
    blurb1,
    blurb2,
    artistNames,
  };
};
