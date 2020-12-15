interface Video {
  title: string;
  creators: [string, string, string];
  description1: string;
  description2: string;
  url: string;
  publishDate: string;
  slug: string;
  thumbnail: string;
  id: string;
}

type VideoAction = {
  type: RECEIVE_VIDEOS;
  videos: Video[];
};

type VideosById = ById<Video>;

type Videos = { byId: VideosById; visibleIds: VisibileIds };
interface Cart {
  addedIds: AddedIds;
  quantityById: ProductQuantityById;
  shipping: Shipping;
  loading: boolean;
  config: { showSlideshow: boolean; hasError: boolean };
}
