import React from "react";

import { AmericaTitleBold, AmericaTitle, TitleWrapper } from "../Common/Common";

interface IProps {
  title: string;
  subtitle: string;
}

function VideoTitle(props: IProps) {
  const { title, subtitle } = props;
  return (
    <TitleWrapper>
      <AmericaTitle>{title}: </AmericaTitle>
      <AmericaTitleBold>{subtitle}</AmericaTitleBold>
    </TitleWrapper>
  );
}

export default VideoTitle;
