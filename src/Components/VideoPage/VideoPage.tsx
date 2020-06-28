import React from "react";
import { RouteComponentProps } from "@reach/router";

import MetaSection from "../Common/MetaSection";
import Video from "./Video";

interface IProps extends RouteComponentProps {
  video: Video;
}

export default function VideoPage(props: IProps) {
  const { url, title, creator, description1, description2 } = props.video;
  return (
    <>
      <Video url={url} title={title} />
      <MetaSection
        title={creator}
        subtitle={title}
        leftText={description1}
        rightText={description2}
        split={true}
      />
    </>
  );
}
