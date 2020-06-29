import React from "react";
import styled from "styled-components/macro";

import { AmericaTitle } from "../Common/Common";

const TitleWrap = styled.span`
  width: 100%;
`;

const TitleCopy = styled.h1`
  display: inline;
  font-size: 1em;
  font-weight: 300;
`;

interface IProps {
  title: string;
  subtitle: string;
  split?: boolean;
}

function VideoTitle(props: IProps) {
  const { title, subtitle, split } = props;
  return (
    <AmericaTitle>
      <TitleCopy>{subtitle}: </TitleCopy>
      {split && <br></br>}
      {title}
    </AmericaTitle>
  );
}

export default VideoTitle;
