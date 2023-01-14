import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "@emotion/styled";
import { PortableText } from "@portabletext/react";

import SEO from "../Components/seo";
import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";
import { useSetBackground } from "../hooks/useSetBackground";

const TextWrap = styled.section`
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--spacing-6);
  }
`;

const About: React.FC<PageProps> = () => {
  const { allSanityAbout } = useStaticQuery(graphql`
    query {
      allSanityAbout {
        nodes {
          _rawDescription
        }
      }
    }
  `);

  const { _rawDescription } = allSanityAbout.nodes[0];
  useSetBackground("about");

  return (
    <Layout>
      <SEO title="About" description="About Monitor Books" />
      <TextWrap>
        <PortableText value={_rawDescription} />
      </TextWrap>
    </Layout>
  );
};

export default About;
