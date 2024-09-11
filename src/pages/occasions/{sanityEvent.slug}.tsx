import React from "react";
import styled from "@emotion/styled";
import { graphql, PageProps } from "gatsby";
import { videoMapper } from "../../api/mappers";
import { PortableText } from "@portabletext/react";

import { Video, VideoTitle } from "../../Components/Common";
import SEO from "../../Components/seo";
import Layout from "../../Components/layout";

import {
  LeftSection,
  RightSection,
  RightSectionWrapper,
  TextWrapper,
} from "../../Components/Common/Text";
import { SanityBackgroundColours } from "../books/{sanityProduct.slug}";

export const query = graphql`
  query VideoQuery($slug: String!) {
    sanityEvent(slug: { eq: $slug }) {
      title
      url
      artists
      _rawBlurb1
      _rawBlurb2
    }
    sanityBackgroundColours {
      occasions
    }
  }
`;

const VideoPageWrapper = styled(Layout)<{ backgroundColour: CssHexValue }>`
  display: block;
`;

interface VideoPageProps extends PageProps {
  data: {
    sanityEvent: ApiVideo;
    sanityBackgroundColours: SanityBackgroundColours;
  };
}

const VideoPage: React.FC<VideoPageProps> = ({ data }) => {
  const video = videoMapper(data.sanityEvent);

  const { title, url, artists, blurb1, blurb2 } = video;
  return (
    <VideoPageWrapper backgroundColour={data.sanityBackgroundColours.occasions}>
      <SEO
        title={`${title} featuring ${artists.join(" ")}`}
        description={title}
      />
      <Video url={url} title={title} />
      <VideoTitle title={`${title}:`} subtitle={artists} />
      <TextWrapper className="TextWrapper">
        <LeftSection className="left-section">
          <PortableText value={blurb1} />
        </LeftSection>
        <RightSectionWrapper>
          <RightSection className="right-section">
            <PortableText value={blurb2} />
          </RightSection>
        </RightSectionWrapper>
      </TextWrapper>
    </VideoPageWrapper>
  );
};

export default VideoPage;
