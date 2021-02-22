export const productMapper = (product: ApiProduct) => {
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
    images,
    slug,
    price,
    inventory,
    thumbnail,
    devPriceId,
    prodPriceId,
    id,
    blurb1,
    blurb2,
    publishedDate: new Date(publishedDate),
    priceId: process.env.NODE_ENV === "production" ? prodPriceId : devPriceId,
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
