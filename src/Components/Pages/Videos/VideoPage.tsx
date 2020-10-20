import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, Video, VideoTitle, SplitText } from "../../Common";

interface Props extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: Props) {
  const { url, title, creator, description1, description2 } = props.video;
  return (
    <>
      <Video url={url} title={title} />
      <InfoSection>
        <VideoTitle title={`${title}:`} subtitle={creator} />
        <SplitText leftText={description1} rightText={description2} />
      </InfoSection>
    </>
  );
}
