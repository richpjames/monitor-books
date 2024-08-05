interface Video {
  title: string;
  artists: string[];
  blurb1: SanityEvent["_rawBlurb1"];
  blurb2: SanityEvent["_rawBlurb1"];
  url: string;
  publishedDate: Date;
  slug: string;
  thumbnail: ImageDataLike;
  id: string;
}
interface ApiVideo {
  id: number;
  title: string;
  publishedDate: string;
  slug: string;
  url: string;
  thumbnail_img?: StrapiGatsbyImage;
  _rawBlurb1: string;
  _rawBlurb2: string;
  artists: string[];
}
type EventList = {
  eventLists: string[];
};
