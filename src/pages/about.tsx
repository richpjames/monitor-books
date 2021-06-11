import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";
import { useSetBackground } from "../hooks/useSetBackground";

const TextWrap = styled.section`
  padding-top: var(--small-component-spacing);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--small-component-spacing);
  }
`;

const About: React.FC<PageProps> = ({ location }) => {
  const { strapiAboutPage, strapiSubmissions } = useStaticQuery(graphql`
    query AboutPageQuery {
      strapiAboutPage {
        Description
      }
      strapiSubmissions {
        title
        description
      }
    }
  `);
  const { Description } = strapiAboutPage;
  useSetBackground('about-background-colour')

  return (
    <Layout pathname={location.pathname}>
      <TextWrap>
        <ReactMarkdown children={Description} />
        <p><u>{strapiSubmissions.title}</u></p>
        <ReactMarkdown children={strapiSubmissions.description} />
      </TextWrap>
    </Layout>
  );
};

export default About;
