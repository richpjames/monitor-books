interface Video {
  title: string;
  artists: string[];
  blurb1: string;
  blurb2: string;
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
type StrapiMurmurReadingSeriesDescription = {
  description_of_events: string;
};
