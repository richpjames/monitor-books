import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "@emotion/styled";
import { PortableText } from "@portabletext/react";

import SEO from "../Components/seo";
import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TextWrap = styled.section`
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--spacing-6);
  }
`;

const About: React.FC<PageProps> = () => {
  const { sanityAbout, allSanityBackgroundColours } = useStaticQuery(graphql`
    query {
      sanityAbout {
        _rawDescription
        banner_image {
          asset {
            gatsbyImageData(placeholder: BLURRED, fit: FILLMAX)
          }
        }
      }
      allSanityBackgroundColours {
        nodes {
          about
        }
      }
    }
  `);

  const { _rawDescription, banner_image } = sanityAbout;

  const { about: aboutBackgroundColour } = allSanityBackgroundColours.nodes[0];
  console.log({ aboutBackgroundColour });
  const photo = getImage(banner_image.asset);
  return (
    <Layout backgroundColour={aboutBackgroundColour}>
      <SEO title="About" description="About Monitor Books" />
      <TextWrap>
        {photo && (
          <GatsbyImage
            image={photo}
            alt={`a photo of some of Monitor's books`}
          />
        )}
        <PortableText value={_rawDescription} />
      </TextWrap>
    </Layout>
  );
};

export default About;
