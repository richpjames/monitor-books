import React from "react";
import styled from "styled-components/macro";

import Logo from "../assets/img/logo.png";

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: fade-out 1s ease-out 5s both;
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Banner = styled.img`
  position: relative;
  width: 100%;
  max-height: 100%;
  animation: fade-out 1s ease-out 3s both;
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
`;

const Slideshow = () => {
  return (
    <Background>
      <BannerWrap>
        <Banner src={Logo} className="Banner" />
      </BannerWrap>
    </Background>
  );
};

export default Slideshow;
