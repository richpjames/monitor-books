import styled from "styled-components/macro";
import { text } from "../../constants";

export const PageWrapper = styled.main<{ backgroundColour: string }>`
  padding: 2.5rem;
  max-width: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ backgroundColour }) =>
    `${backgroundColour || `purple`}`};
  @media only screen and (max-width: 400px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const InfoSection = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

export const LoadingAnimation = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80px;
  height: 80px;
  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid ${text};
    border-color: ${text} transparent ${text} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
