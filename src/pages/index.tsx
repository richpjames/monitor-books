import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { navigate } from "gatsby";
import styled from "styled-components/macro";

import { introTimerMilliseconds, mobileBreakpoint } from "../constants";
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
  const wrapperEl = useRef<any>(null)
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (typeof window !== "undefined")
      (window as any).introTimer = setTimeout(() => {
        // navigateToBooks();
      }, introTimerMilliseconds);
  }, []);
  useLayoutEffect(() => {
    if (wrapperEl?.current) {
      console.log(wrapperEl.current)
      setWidth(() => wrapperEl?.current?.offsetWidth);
    }
  }, [])
  return (
    <IntroPageWrapper
      backgroundColour="var(--faded-blue)"
      onClick={navigateToBooks}
      ref={wrapperEl}
    >
      <SEO title="Monitor Books Home" description="" />
      <BoxWrapper >
        <TextBoxLogo parentWidth={width} />
      </BoxWrapper>
    </IntroPageWrapper>
  );
};

export default Home;
