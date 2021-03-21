import styled from "styled-components/macro";
import { Link } from "gatsby";

interface BasketListItemContainerProps {
  index: number;
  height: string;
  width: string;
  horizontalmargin: string;
  topmargin: string;
  className?: string;
  id: string;
}

interface ListItemContainerProps {
  index: number;
  height: string;
  width: string;
  horizontalmargin: string;
  topmargin: string;
  className?: string;
  id: string;
}

export const ListItemContainerWrap = styled(Link)<ListItemContainerProps>`
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalmargin};
  margin-right: ${(props) => props.horizontalmargin};
  margin-top: ${(props) => (props.index < 1 ? "0" : props.topmargin)};
  border-top: 1px solid var(--main-border-colour);
  border-bottom: 1px solid var(--main-border-colour);
  text-decoration: none;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

export const BasketListItemContainerWrap = styled.div<BasketListItemContainerProps>`
  display: flex;
  border-top: 2px solid var(--main-border-colour);
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalmargin};
  margin-right: ${(props) => props.horizontalmargin};
  margin-top: ${(props) => (props.index < 1 ? "0" : props.topmargin)};
  text-decoration: none;
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
  width: 100%;
  position: relative;
  padding-left: var(--small-component-spacing);
  @media only screen and (max-width: 600px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
  }
`;

export const VideoCreatorContainer = styled(MetaInfoContainer)`
  justify-content: center;
`;

export const ListItemTitle = styled.h4`
  width: 100%;
  border-top: 2px solid var(--main-border-colour);
  font-family: "Century Schoolbook";
  font-size: var(--font-title-medium);
  font-weight: normal;
  font-style: italic;
`;

export const ListItemSubtitle = styled.h4`
  border-top: 2px solid var(--main-border-colour);
  width: 100%;
`;

export const VideoCreatorName = styled(ListItemTitle)`
  padding-top: 0rem;
`;

export const Photo = styled.img`
  width: var(--medium-component-width);
  height: var(--medium-component-width);
  object-fit: cover;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    max-height: 100vw;
    margin: 3% 0%;
    max-width: 100%;
    height: 100%;
  }
`;

export const ListWrap = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: var(--small-component-spacing);
`;

export const ListItemWrap = styled.li`
  width: 100%;
  text-decoration: none !important;
  display: flex;
`;
export const ListItemLink = styled(Link)`
  margin-top: var(--x-small-component-spacing);
  width: 100%;
  text-decoration: none;
`;

export const ItemType = styled.h5`
  border-top: 2px solid var(--main-border-colour);
  width: 100%;
  padding: var(--x-small-text-spacing) 0 var(--x-small-text-spacing) 0;
  font-size: var(--font-title-medium);
`;
