export const productListPageMapper = (
  product: ApiListPageProduct
): ListPageProduct => {
  const { title, author, publishedDate, slug, thumbnail_image } = product;
  const thumbnail = thumbnail_image?.localFile;

  const publishedDateObj = new Date(publishedDate);
  const yearPublished = publishedDateObj.getFullYear();
  return {
    title,
    author,
    slug,
    thumbnail,
    yearPublished,
  };
};

export const singleProductPageMapper = (
  product: ApiSinglePageProduct
): SinglePageProduct => {
  const {
    title,
    author,
    blurb1,
    blurb2,
    publishedDate,
    devPriceId,
    prodPriceId,
    gallery_images,
  } = product;
  const galleryImages = gallery_images.map(
    (galleryImage) => galleryImage.localfile
  );
  const publishedDateObj = new Date(publishedDate);
  return {
    title,
    author,
    galleryImages,
    blurb1,
    blurb2,
    publishedDate: publishedDateObj,
    priceId: process.env.NODE_ENV === "development" ? devPriceId : prodPriceId,
  };
};

export const basketProductMapper = (product: ApiFullProduct): BasketProduct => {
  const {
    author,
    title,
    price,
    thumbnail,
    id,
    inventory,
    slug,
    devPriceId,
    prodPriceId,
  } = product;
  return {
    author,
    title,
    price,
    thumbnail,
    inventory,
    slug,
    id: `${id}`,
    priceId: process.env.NODE_ENV === "development" ? devPriceId : prodPriceId,
  };
};

export const videoMapper = (video: ApiVideo): Video => {
  const {
    title,
    publishedDate,
    slug,
    url,
    thumbnail_img,
    blurb1,
    blurb2,
    artists,
  } = video;
  const artistNames = artists.map((artist) => artist.Name);
  const thumbnail = thumbnail_img?.localFile;
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
