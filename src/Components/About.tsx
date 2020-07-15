import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";

const TextWrap = styled.p`
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  width: 60%;
`;

const Banner = styled.img`
  position: relative;
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 100%;
  height: 100%;
  max-height: 100%;
  @media only screen and (max-width: 600px) {
    margin-top: 10vh;
    margin-bottom: 10vh;
  }
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
          src="https://www.richjames.co.uk/img/logo_black.jpeg"
          className="Banner"
        />
      </BannerWrap>
      <TextWrap>
        Monitor is a publication platform for poetry, innovative writing and
        criticism based in Manchester, UK. Its first publication, Murmur
        Anthology #1, was published September 2019; single-author releases are
        forthcoming from Summer 2020.
      </TextWrap>
      <TextWrap>
        For submissions and contact, please email:{" "}
        <a href="mailto:editor@monitorbooks.co.uk">editor@monitorbooks.co.uk</a>
      </TextWrap>
    </>
  );
};

export default About;
