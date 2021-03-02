import styled from "styled-components/macro";
import { text } from "../../constants";

export const PageSubtitle = styled.h1`
  font-family: "GT America", sans-serif;
  font-weight: 300;
`;

export const PageTitle = styled(PageSubtitle)`
  font-weight: 200;
  font-family: "GT America", sans-serif;
`;

export const PageTitleBold = styled(PageTitle)`
  font-weight: 400;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid ${text};
  padding-top: 2rem;
  padding-bottom: 0.75rem;
  @media only screen and (min-width: 600px) {
    padding-bottom: 0.75rem;
    padding-top: 2rem;
  }
`;
