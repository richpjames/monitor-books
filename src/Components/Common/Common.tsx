import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 100%;
  margin-top: 3vh;
`;

export const CalsonTitle = styled.h1`
  margin-left: 2%;
  margin-right: 2%;
`;

export const AmericaTitle = styled(CalsonTitle)`
  margin-left: 2.5%;
  font-size: 2em;
  @media only screen and (max-width: 700px) {
    font-size: 1.1em;
  }
`;
