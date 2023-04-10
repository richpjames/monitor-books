export const productListPageMapper = (
  product: ApiListPageProduct
): ListPageProduct => {
  const { title, author, date_published, slug, thumbnail_image, productType } =
    product;
  const thumbnail = thumbnail_image.asset;

  const publishedDateObj = new Date(date_published);
  const yearPublished = publishedDateObj.getFullYear();
  return {
    title,
    author,
    slug,
    thumbnail,
    yearPublished,
    productType,
  };
};

export const singleProductPageMapper = (
  product: ApiSinglePageProduct
): SinglePageProduct => {
  const {
    title,
    author,
    _rawBlurb1,
    _rawBlurb2,
    date_published,
    price_id,
    photos,
  } = product;

  const publishedDateObj = new Date(date_published);
  return {
    title,
    author,
    galleryImages: photos,
    blurb1: _rawBlurb1,
    blurb2: _rawBlurb2,
    publishedDate: publishedDateObj,
    priceId: price_id,
  };
};

export const basketProductMapper = (product: ApiFullProduct): BasketProduct => {
  const { author, title, price, thumbnail_image, inventory, slug, price_id } =
    product;

  return {
    author,
    title,
    price,
    thumbnail: thumbnail_image.asset,
    inventory,
    slug,
    priceId: price_id,
  };
};

export const videoMapper = (video: ApiVideo): Video => {
  const {
    title,
    publishedDate,
    slug,
    url,
    thumbnail_img,
    _rawBlurb1,
    _rawBlurb2,
    artists,
  } = video;

  const thumbnail = thumbnail_img?.localFile;
  return {
    title,
    publishedDate: new Date(publishedDate),
    id: url,
    slug,
    url,
    thumbnail,
    blurb1: _rawBlurb1,
    blurb2: _rawBlurb2,
    artists,
  };
};
