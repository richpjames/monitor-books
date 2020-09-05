import styled from "styled-components/macro";
import { offWhite, offOffWhite } from "../../constants/colours";
import { AmericaTitle } from "./Titles";

export const ListItemContainer = styled.div<{
  index: number;
  height: string;
  width: string;
  horizontalMargin: string;
  topMargin: string;
}>`
  display: flex;
  justify-content: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalMargin};
  margin-right: ${(props) => props.horizontalMargin};
  margin-top: ${(props) => (props.index < 1 ? "0" : props.topMargin)};
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

export const MetaInfoContainer = styled.div<{ index: number; width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};
  position: relative;
  background-color: ${(props) =>
    props.index < 1 ? `${offWhite}` : `${offOffWhite}`};
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ListItemTitle = styled.h3`
  width: 100%;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 0.1rem;
`;

export const ListItemSubtitle = styled.h4`
  padding-top: 0.1rem;
  padding-bottom: 1rem;
  width: 100%;
  text-align: center;
`;

export const PhotoWrap = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${offWhite};
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    max-height: 100vw;
    margin: 3% 0%;
    max-width: 100%;
    height: 100%;
  }
`;

export const ListTitle = styled(AmericaTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;
