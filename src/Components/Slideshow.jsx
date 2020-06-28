import React from "react";
import styled from "styled-components";

const Banner = styled.img`
  position: relative;
  width: 100%;
  max-height: 100%;
  -webkit-animation: fade-out 1s ease-out 8s both;
  animation: fade-out 1s ease-out 8s both;
  @-webkit-keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const BannerWrap = styled.div`
  width: 35%;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 45%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const Slideshow = () => {
  return (
    <BannerWrap>
      <Banner
        src="https://www.monitorbooks.co.uk/img/logo.png"
        className="Banner"
      />
    </BannerWrap>
  );
};

export default Slideshow;
