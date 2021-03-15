import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import Layout from "../Components/layout";

const TextWrap = styled.section`
  width: min(100%, var(--x-large-component-width));
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
