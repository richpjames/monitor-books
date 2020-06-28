import React from "react";
import { RouteComponentProps } from "@reach/router";

import Video from "./Video";
import Title from "../Common/TitleVideo";
import Text from "../Common/Text";

interface IProps extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: IProps) {
  const { url, title, creator, description1, description2 } = props.video;
  return (
    <>
      <Video url={url} title={title} />
      <Title title={creator} subtitle={title} />
      <Text leftText={description1} rightText={description2} />
    </>
  );
}
