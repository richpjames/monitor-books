import React from "react";
import styled from "styled-components/macro";
import { graphql, PageProps } from "gatsby";
import { videoMapper } from "../../api/mappers";

import {
  InfoSection,
  Video,
  VideoTitle,
  SplitText,
} from "../../Components/Common";
import Layout from "../../Components/layout";

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
  }
`;

const VideoPageWrapper = styled(Layout)`
  display: block;
`;

interface VideoPageProps extends PageProps {
  data: { strapiVideos: ApiVideo };
}

const VideoPage: React.FC<VideoPageProps> = ({ data, location }) => {
  const video = videoMapper(data.strapiVideos);
  const { title, url, artistNames, blurb1, blurb2 } = video;
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <VideoPageWrapper
      backgroundColour="var(--video-background-colour)"
      pathname={location.pathname}
    >
      <>
        <Video url={url} title={title} />
        <InfoSection>
          <VideoTitle title={`${title}:`} subtitle={artistNames} />
          <SplitText leftText={blurb1} rightText={blurb2} />
        </InfoSection>
      </>
    </VideoPageWrapper>
  );
};
export default VideoPage;
