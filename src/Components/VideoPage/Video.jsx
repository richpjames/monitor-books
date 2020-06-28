import React from "react";
import styled from "styled-components/macro";

const VideoWrap = styled.div`
  position: relative;
  padding: 56.25% 0 0 0;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90%;
`;

const Video = ({ url, title }) => {
  return (
    <VideoWrap>
      <Iframe
        src={`https://player.vimeo.com/video/${url}?color=ffffff&title=0&byline=0&portrait=0`}
        allow="autoplay; fullscreen"
        allowfullscreen
        frameBorder="0"
        title={title}
      />
    </VideoWrap>
  );
};

export default Video;
