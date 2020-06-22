import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

const TextWrap = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding-top: 2vh;
  width: 70%;
`;

const Banner = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;
`;

const BannerWrap = styled.div`
  width: 35%;
  margin: 0 auto;
  position: relative;
`;

interface IProps extends RouteComponentProps {}

const About = (props: IProps) => {
  return (
    <>
      <BannerWrap>
        <Banner
          src="https://www.monitorbooks.co.uk/img/logo.jpg"
          className="Banner"
        />
      </BannerWrap>
      <TextWrap>
        Monitor is a publication platform for poetry, innovative writing and
        criticism based in Manchester, UK. Its first publication, Murmur
        Anthology #1, is published September 2019; single-author releases are
        forthcoming from the winter.
      </TextWrap>
    </>
  );
};

export default About;
