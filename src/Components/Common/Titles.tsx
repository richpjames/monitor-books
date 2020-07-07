import styled from "styled-components/macro";

const fontSize = 2;

export const CalsonTitle = styled.h1`
  font-size: ${fontSize}em;
  display: inline;
  font-family: "Caslon", sans-serif;
  font-weight: 300;
  @media only screen and (max-width: 700px) {
    font-size: ${fontSize - 0.5}em;
  }
`;

export const AmericaTitle = styled(CalsonTitle)`
  font-weight: 200;
  font-family: "GT America", sans-serif;
  font-size: ${fontSize}em;
  display: inline;
  @media only screen and (max-width: 700px) {
    font-size: ${fontSize - 0.5}em;
  }
`;

export const AmericaTitleBold = styled(AmericaTitle)`
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  padding-bottom: 2.5%;
  padding-top: 2.5%;
  border-bottom: 1px solid black;
`;
