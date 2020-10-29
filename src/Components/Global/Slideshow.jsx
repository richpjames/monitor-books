import React from "react";
import styled from "styled-components/macro";

// import Logo from "../../assets/img/logo.png";
import { introTimer } from "../../constants/";

const fadeOut = ` @keyframes fade-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}`;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  animation: fade-out 1s ease-out ${introTimer}s both;
  ${fadeOut}
`;

const Banner = styled.img`
  max-width: 80%;
  max-height: 100%;
  animation: fade-out 1s ease-out ${introTimer - 1}s both;
  transform: translateY(-25%);
  ${fadeOut}
`;

const Slideshow = () => {
  return (
    <Background>
      <Banner
        src="https://monitorbooks.co.uk/img/logo.png"
        className="Banner"
        alt="Monitor Books Logo"
      />
    </Background>
  );
};

export default Slideshow;
