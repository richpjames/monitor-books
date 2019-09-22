import React from "react";
import styled from "styled-components";

const TitleText = styled.h1`
@font-face {
    font-family: "Caslon";
    src: url(https://www.richjames.co.uk/fonts/ACaslonPro-Italic.otf) format("truetype");
}

padding-top: 5vh;
padding-bottom: 3vh;
font-size: 2em;
width: 100%;
margin-top: 0;
margin-right: 0;
margin-bottom: 0;
margin-left: 2.54%;
font-family: "Caslon", sans-serif;
text-align: left;

`;

const TitleWrap = styled.section`
width: 100%;
border-bottom: 1px solid black;
`;

function Title() {
  return (
    <TitleWrap>
      <TitleText className="TitleText">Murmur Anthology</TitleText>
    </TitleWrap>
  );
}

export default Title;
