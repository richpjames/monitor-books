import React from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";

import {
  InfoSection,
  Video,
  VideoTitle,
  SplitText,
  PageWrapper,
} from "../../Common";

interface Props extends RouteComponentProps {
  video: Video;
}

const VideoPageWrapper = styled(PageWrapper)`
  display: block;
`;

export default function VideoPage(props: Props) {
  const { url, title, creators, description1, description2 } = props.video;
  React.useEffect(() => window.scrollTo(0, 0), []);
  return (
    <VideoPageWrapper>
      <>
        <Video url={url} title={title} />
        <InfoSection>
          <VideoTitle title={`${title}:`} subtitle={creators} />
          <SplitText leftText={description1} rightText={description2} />
        </InfoSection>
      </>
    </VideoPageWrapper>
  );
}
