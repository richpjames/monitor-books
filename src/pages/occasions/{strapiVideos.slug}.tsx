import React from "react";
import styled from "@emotion/styled";
import { graphql, PageProps } from "gatsby";
import { videoMapper } from "../../api/mappers";

import { Video, VideoTitle, SplitText } from "../../Components/Common";
import SEO from "../../Components/seo";
import Layout from "../../Components/layout";
import { useSetBackground } from "../../hooks/useSetBackground";

export const query = graphql`
  query VideoQuery($slug: String!) {
    strapiVideos(slug: { eq: $slug }) {
      title
      publishedDate
      slug
      url
      thumbnail
      blurb1
      blurb2
      artists {
        Name
      }
    }
    strapiMurmurReadingSeriesDescription {
      Description
    }
  }
`;

const VideoPageWrapper = styled(Layout)`
  display: block;
`;

interface VideoPageProps extends PageProps {
  data: {
    strapiVideos: ApiVideo;
    strapiMurmurReadingSeriesDescription: StrapiMurmurReadingSeriesDescription;
  };
}

const VideoPage: React.FC<VideoPageProps> = ({ data }) => {
  useSetBackground("occasions_background");

  const video = videoMapper(data.strapiVideos);

  const { title, url, artistNames, blurb1, blurb2 } = video;
  return (
    <VideoPageWrapper>
      <SEO
        title={`${title} featuring ${artistNames.join(" ")}`}
        description={title}
      />
      <Video url={url} title={title} />
      <VideoTitle title={`${title}:`} subtitle={artistNames} />
      <SplitText leftText={blurb1} rightText={blurb2} />
    </VideoPageWrapper>
  );
};
export default VideoPage;
