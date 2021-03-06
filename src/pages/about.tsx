import React from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "styled-components/macro";
import ReactMarkdown from "react-markdown";

import Layout from "../Components/layout";

const Banner = styled.img`
  width: min(100%, 500px);
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const BannerWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const TextWrap = styled.section`
  width: min(100%, 750px);
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
    <Layout backgroundColour="white" pathname={location.pathname}>
      <BannerWrap>
        <Banner
          src="https://monitorbooks.co.uk/img/logo.png"
          className="Banner"
        />
      </BannerWrap>
      <TextWrap>
        <ReactMarkdown children={Description} />
      </TextWrap>
    </Layout>
  );
};

export default About;
