import React, { useEffect } from "react";
import { navigate } from "gatsby";
import styled from "styled-components/macro";

import { introTimerMilliseconds } from "../constants";
import { PageWrapper } from "../Components/layout";
import { TextBoxLogo } from "../Components/Global/TextBoxLogo";
import SEO from "../Components/seo";

const navigateToBooks = () => navigate("/books/propositions");

const BoxWrapper = styled.div`
  margin-top: -100px;
`;

export const IntroPageWrapper = styled(PageWrapper)`
  justify-content: center;
`;

const Home = () => {
  useEffect(() => {
    if (typeof window !== "undefined")
      (window as any).introTimer = setTimeout(() => {
        navigateToBooks();
      }, introTimerMilliseconds);
  }, []);
  return (
    <IntroPageWrapper
      backgroundColour="var(--faded-blue)"
      onClick={navigateToBooks}
    >
      <SEO title="Monitor Books Home" description="" />
      <BoxWrapper>
        <TextBoxLogo />
      </BoxWrapper>
    </IntroPageWrapper>
  );
};

export default Home;
