import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { PageWrapper, Text } from "../Common";

const Banner = styled.img`
  width: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

const BannerWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`;

const About: React.FC<RouteComponentProps> = () => {
  return (
    <PageWrapper>
      <BannerWrap>
        <Banner
          src="https://monitorbooks.co.uk/img/logo.png"
          className="Banner"
        />
      </BannerWrap>
      <Text
        text="<p>Monitor is a publication platform for poetry, innovative writing and
        criticism based in Manchester, UK. Its first publication, Murmur
        Anthology #1, was published September 2019, and its second book is Amy McCauley’s Propositions, which is published this November.</p>"
      ></Text>
      <Text
        text="<p>For submissions and contact, please email:
        <a href='mailto:editor@monitorbooks.co.uk'>editor@monitorbooks.co.uk</a></p>"
      ></Text>
    </PageWrapper>
  );
};

export default About;
