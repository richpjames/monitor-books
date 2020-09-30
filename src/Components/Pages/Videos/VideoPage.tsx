import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, Video, Title, Text } from "../../Common";

interface Props extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: Props) {
  const { url, title, creator, description1, description2 } = props.video;
  return (
    <>
      <Video url={url} title={title} />
      <InfoSection>
        <Title title={`${title}:`} subtitle={creator} bold />
        <Text leftText={description1} rightText={description2} />
      </InfoSection>
    </>
  );
}
