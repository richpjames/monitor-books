interface Video {
  title: string;
  artistNames: string[];
  blurb1: string;
  blurb2: string;
  url: string;
  publishedDate: Date;
  slug: string;
  thumbnail: any;
  id: string;
}
interface ApiVideo {
  id: number;
  title: string;
  publishedDate: string;
  slug: string;
  url: string;
  thumbnail_img: StrapiGatsbyImage;
  blurb1: string;
  blurb2: string;
  artists: { id: number; Name: string; Description: string }[];
}
type StrapiMurmurReadingSeriesDescription = {
  Description: string;
};
type StrapiGatsbyImage = {
  localFile: {
    childImageSharp: {
      gatsbyImageData: any;
    };
  };
};
