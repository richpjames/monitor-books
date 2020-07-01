import React from "react";
import { RouteComponentProps } from "@reach/router";

import Video from "./Video";
import VideoTitle from "./VideoTitle";
import Text from "../Common/Text";

interface IProps extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: IProps) {
  const { url, title, creator, description1, description2 } = props.video;
  return (
    <>
      <Video url={url} title={title} />
      <VideoTitle title={title} subtitle={creator} />
      <Text leftText={description1} rightText={description2} />
    </>
  );
}
