import React, { useLayoutEffect } from "react";
import { navigate } from "gatsby";
import styled from "styled-components/macro";

import { mobileBreakpoint, introTimerMilliseconds } from "../constants";
import { PageWrapper } from "../Components/layout";
import { TextBoxLogo } from "../Components/Global/TextBoxLogo";
import SEO from "../Components/seo";
import { useSetBackground } from "../hooks/useSetBackground";

const navigateToBooks = () => navigate("/books/");

const BoxWrapper = styled.div`
  margin-top: -100px;
  width: 25%;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    margin-top: -50px;
    width: 85%;
  }`;

export const IntroPageWrapper = styled(PageWrapper)`
  justify-content: center;
`;

const Home = () => {


  useLayoutEffect(() => {

    if (typeof window !== "undefined")
      (window as any).introTimer = setTimeout(() => {
        navigateToBooks();
      }, introTimerMilliseconds);
  }, [])

  useSetBackground('product-background-colour');

  return (
    <IntroPageWrapper
      onClick={navigateToBooks}
    >
      <SEO title="Home" description="" />
      <BoxWrapper >
        <TextBoxLogo />
      </BoxWrapper>
    </IntroPageWrapper>
  );
};

export default Home;
