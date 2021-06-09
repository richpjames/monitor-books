import React, { useLayoutEffect, useRef, useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components/macro";

import { introTimerMilliseconds } from "../constants";
import { PageWrapper } from "../Components/layout";
import { TextBoxLogo } from "../Components/Global/TextBoxLogo";
import SEO from "../Components/seo";
import { useSetBackground } from "../hooks/useSetBackground";

const navigateToBooks = () => navigate("/books/propositions");

const BoxWrapper = styled.div`
  margin-top: -100px;

`;

export const IntroPageWrapper = styled(PageWrapper)`
  justify-content: center;
`;

const Home = () => {
  const wrapperEl = useRef<any>(null)
  const [width, setWidth] = useState(0)


  useLayoutEffect(() => {
    if (wrapperEl?.current) {
      setWidth(() => wrapperEl?.current?.offsetWidth);
    }
    if (typeof window !== "undefined")
      (window as any).introTimer = setTimeout(() => {
        navigateToBooks();
      }, introTimerMilliseconds);
  }, [])

  useSetBackground('product-background-colour');

  return (
    <IntroPageWrapper
      onClick={navigateToBooks}
      ref={wrapperEl}
    >
      <SEO title="Home" description="" />
      <BoxWrapper >
        <TextBoxLogo parentWidth={width} />
      </BoxWrapper>
    </IntroPageWrapper>
  );
};

export default Home;
