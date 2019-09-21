import React from "react";
import styled from "styled-components";

const LeftSection = styled.p`
  width: 45%;
  margin-left: 0.5%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const RightSection = styled.p`
  width: 45%;
  margin-right: 2.5%;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const TextWrapper = styled.section`
  display: flex;
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  justify-content: space-between;
`;

const Text = () => {
  
  return (
    <TextWrapper className="TextWrapper">
      <LeftSection className="LeftSection">
      Monitor Books is proud to present: Murmur Anthology #1. 
      Featuring new writing from contributors to the Murmur Reading Series in Manchester, 
      this anthology is a varied and exciting collection of innovative poetry, prose, and drama from seventeen 
      international authors. <br></br>
        <br></br>
        Authors: Rachael Allen, Bryony Bates, Jen Calleja, Alan Fielden,
        Joey Frances, Aurelia Guo, Tessa Harris, Tom Jenks, Barbara Juch, Sophie
        Jung, Shiv Kotecha, Jazmine Linklater, Amy McCauley, Lila Matsumoto, Sam
        Riviere, Michelle Steinbeck, Mónica de la Torre.
      </LeftSection>
      <RightSection className="RightSection">
        Designed by Joe Haigh at Chaosmos Studios<br></br>
        Artwork by Joe Haigh & Michael Holland<br></br>

        Edited by Rory Cook<br></br> with Harriet Hill-Payne, Lucy Burns & RL Perry
        <br></br>
        234mm x 130mm<br></br>
        124 pages<br></br>
        Perfect bound with tracing paper dust-jacket<br></br>
        Edition of 250<br></br>
        <br></br>
        Published September 2019<br></br>
        £13 + p&p
      </RightSection>
    </TextWrapper>
  );
};

export default Text;
