import React from "react";
import styled from "styled-components/macro";

import { Text } from "../Components/Common";
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

const TextWrap = styled.div`
  width: min(100%, 750px);
`;

const About: React.FC = () => {
  return (
    <Layout>
      <BannerWrap>
        <Banner
          src="https://monitorbooks.co.uk/img/logo.png"
          className="Banner"
        />
      </BannerWrap>
      <TextWrap>
        <Text
          text="<p>Monitor is a publication platform for poetry, innovative writing and
        criticism based in Manchester, UK. Its first publication, Murmur
        Anthology #1, was published September 2019, and its second book is Amy McCauley’s Propositions, which is published this November.</p>"
        ></Text>
        <Text
          text="<p>For submissions and contact, please email:
        <a href='mailto:editor@monitorbooks.co.uk'>editor@monitorbooks.co.uk</a></p>"
        ></Text>
      </TextWrap>
    </Layout>
  );
};

export default About;
