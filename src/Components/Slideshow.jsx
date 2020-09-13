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
  max-width: 80%;
  max-height: 100%;
  animation: fade-out 1s ease-out 3s both;
  transform: translateY(-25%);
  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Slideshow = () => {
  return (
    <Background>
      <Banner src={Logo} className="Banner" />
    </Background>
  );
};

export default Slideshow;
