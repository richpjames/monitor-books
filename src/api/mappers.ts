export const productMapper = (product: ApiProduct) => {
  const {
    title,
    author,
    images,
    lefttext,
    righttext,
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
    publishedDate: new Date(publishedDate),
    priceId: devPriceId,
    blurb1: lefttext,
    blurb2: righttext,
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
