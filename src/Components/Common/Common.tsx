import styled from "styled-components";

const fontSize = 3;

export const PageContainer = styled.div`
  max-width: 100%;
  margin-top: 3vh;
`;

export const CalsonTitle = styled.h1`
  font-size: ${fontSize}em;
  display: inline;
  font-family: "Caslon", sans-serif;
  font-weight: 300;
`;

export const AmericaTitle = styled(CalsonTitle)`
  font-weight: 200;
  font-family: "GT America", sans-serif;
  font-size: ${fontSize}em;
  margin-left: 2.5%;
  display: inline;
  @media only screen and (max-width: 700px) {
    font-size: 1.1em;
  }
`;
