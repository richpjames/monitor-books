import React from "react";
import styled from "styled-components/macro";

import { AmericaTitle } from "../Common/Common";

const Container = styled.div`
  border-bottom: 1px solid black;
  margin-bottom: 20px;
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
  const { title, subtitle } = props;
  return (
    <Container>
      <AmericaTitle>
        <TitleCopy>{subtitle}: </TitleCopy>
        {title}
      </AmericaTitle>
    </Container>
  );
}

export default VideoTitle;
