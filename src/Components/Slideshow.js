import React from "react";
import styled from "styled-components";

const Banner = styled.img`
  position: relative;
  width: 100%;
  min-height: 100%;
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

const Slideshow = () => {
  return (
    <Banner
      src="https://www.monitorbooks.co.uk/img/banner.jpg"
      className="Banner"
    />
  );
};

export default Slideshow;
