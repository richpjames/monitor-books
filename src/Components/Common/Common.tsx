import styled from "styled-components/macro";

export const PageWrapper = styled.div`
  max-width: 100%;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    border: 6px solid #000;
    border-color: #000 transparent #000 transparent;
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
