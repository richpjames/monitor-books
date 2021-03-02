import React from "react";
import styled from "styled-components/macro";

const VideoWrap = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
  margin-top: 3vh;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
`;

export const Video = ({ url, title }) => {
  return (
    <VideoWrap>
      <Iframe
        src={`https://player.vimeo.com/video/${url}?color=ffffff&title=0&byline=0&portrait=0`}
        allow="autoplay; fullscreen"
        allowfullscreen
        frameBorder="0"
        allowFullScreen
        webkitallowfullscreen
        mozallowfullscreen
        title={title}
      />
    </VideoWrap>
  );
};
