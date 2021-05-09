import React, { useLayoutEffect } from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";
import { setBackground } from "../hooks/setBackground";

const TextWrap = styled.section`
  width: min(100%, var(--xx-large-component-width));
  padding-top: var(--x-small-component-spacing);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--small-component-spacing);
  }
`;

const About: React.FC<PageProps> = ({ location }) => {
  const { strapiAboutPage } = useStaticQuery(graphql`
    query AboutPageQuery {
      strapiAboutPage {
        Description
      }
    }
  `);
  const { Description } = strapiAboutPage;

  useLayoutEffect(() => {
    setBackground('var(--about-background-colour)')
  }, [])
  return (
    <Layout pathname={location.pathname}>
      <TextWrap>
        <ReactMarkdown children={Description} />
      </TextWrap>
    </Layout>
  );
};

export default About;
