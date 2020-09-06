import React from "react";
import { RouteComponentProps } from "@reach/router";

import { InfoSection, Video, Title, Text } from "../Common";

interface IProps extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: IProps) {
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
