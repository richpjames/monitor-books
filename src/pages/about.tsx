import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";

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
  return (
    <Layout backgroundColour="var(--pink)" pathname={location.pathname}>
      <TextWrap>
        <ReactMarkdown children={Description} />
      </TextWrap>
    </Layout>
  );
};

export default About;
