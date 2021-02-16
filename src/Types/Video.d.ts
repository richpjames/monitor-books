interface Video {
  title: string;
  artistNames: [string, string, string];
  blurb1: string;
  blurb2: string;
  url: string;
  publishedDate: Date;
  slug: string;
  thumbnail: string;
  id: string;
}

type VideoAction = {
  type: RECEIVE_VIDEOS;
  videos: Video[];
};

type VideosById = ById<Video>;

type Videos = { byId: VideosById; visibleIds: VisibleIds };

interface Cart {
  addedIds: AddedIds;
  quantityById: ProductQuantityById;
  shipping: Shipping;
  loading: boolean;
  config: { hasError: boolean };
}
