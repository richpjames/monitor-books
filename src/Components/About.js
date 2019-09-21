import React from "react";
import styled from 'styled-components'

const TextWrap = styled.p`
margin-left: auto;
margin-right: auto;
padding-top: 5vh;
width: 50%;`

function About() {
  return (
    <TextWrap>
      Monitor is a publication platform for poetry and innovative writing based
      in Manchester, UK. Its first publication, Murmur Anthology #1, is
      published September 2019. Single-author releases are forthcoming from the
      autumn
    </TextWrap>
  );
}

export default About;
