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
    devPriceId,
    prodPriceId,
    price,
    gallery_images,
    thumbnail_image,
  } = product;
  const thumbnail = thumbnail_image?.localFile;
  const galleryImages = gallery_images.map(
    (galleryImage) => galleryImage.localfile
  );
  const publishedDateObj = new Date(publishedDate);
  const yearPublished = publishedDateObj.getFullYear();
  return {
    title,
    author,
    slug,
    price,
    inventory,
    thumbnail,
    galleryImages,
    blurb1,
    blurb2,
    id: `${id}`,
    publishedDate: publishedDateObj,
    yearPublished,
    priceId: process.env.NODE_ENV === "development" ? devPriceId : prodPriceId,
    photos: images?.fullSize,
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
