import React from "react";
import styled from "styled-components/macro";

const TitleText = styled.h1`
  font-weight: 200;
  padding-top: 5vh;
  padding-bottom: 3vh;
  font-size: 1.75em;
  width: 95%;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 2.54%;
  font-family: "GT America", sans-serif;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 700px) {
    font-size: 1.2em;
  }
`;

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
    <TitleWrap className="TitleWrap">
      <TitleText className="TitleText">
        <TitleCopy>{subtitle}: </TitleCopy>
        {split && <br></br>}
        {title}
      </TitleText>
    </TitleWrap>
  );
}

export default VideoTitle;
