import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import SEO from "../Components/seo";
import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";
import { useSetBackground } from "../hooks/useSetBackground";

const TextWrap = styled.section`
  padding-top: var(--spacing-6);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--spacing-6);
  }
`;
const SubmissionsText = styled.section`
  padding-top: var(--spacing-5);
;`;

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
      <SEO title="About" description="About Monitor Books" />
      <TextWrap>
        <ReactMarkdown children={Description} />
        <SubmissionsText><h4><u>{strapiSubmissions.title}</u></h4></SubmissionsText>
        <ReactMarkdown children={strapiSubmissions.description} />
      </TextWrap>
    </Layout>
  );
};

export default About;
