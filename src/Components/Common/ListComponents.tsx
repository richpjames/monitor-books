import styled from "styled-components/macro";
import { Link } from "gatsby";

import { mobileBreakpoint } from "../../constants"

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

export const ListItemContainerWrap = styled(Link) <ListItemContainerProps>`
  display: flex;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalmargin};
  margin-right: ${(props) => props.horizontalmargin};
  margin-top: ${(props) => (props.index < 1 ? "0" : props.topmargin)};
  border-top: var(--line-thickness) solid var(--main-border-colour);
  border-bottom: var(--line-thickness) solid var(--main-border-colour);
  text-decoration: none;
`;

export const BasketListItemContainerWrap = styled.div<BasketListItemContainerProps>`
  display: flex;
  border-top: var(--line-thickness) solid var(--main-border-colour);
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalmargin};
  margin-right: ${(props) => props.horizontalmargin};
  margin-top: ${(props) => (props.index < 1 ? "0" : props.topmargin)};
  text-decoration: none;
  @media only screen and (max-width: ${mobileBreakpoint}) {
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
  padding-left: var(--spacing-6);
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--spacing-10);
    padding-left: 0;
    width: 100%;
  }
`;

export const VideoCreatorContainer = styled(MetaInfoContainer)`
  justify-content: center;
`;

export const ListItemTitle = styled.h4`
  width: 100%;
  border-top: var(--line-thickness) solid var(--main-border-colour);
  font-family: "Century Schoolbook";
  font-size: var(--font-title-small);
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
  width: var(--spacing-9);
  height: var(--spacing-9);
  object-fit: cover;
  overflow: hidden;
  @media only screen and (max-width: ${mobileBreakpoint}) {
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
  padding-top: var(--spacing-6);
`;

export const ListItemWrap = styled.li`
  width: 100%;
  text-decoration: none !important;
  display: flex;
  flex-direction: row;
  padding-bottom: 0;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    flex-direction: column;
    padding-bottom: var(--spacing-6);
  }
`;
export const ListItemLink = styled(Link)`
  margin-top: var(--spacing-10);
  width: 100%;
  text-decoration: none;
`;

export const ItemType = styled.h5`
  border-top: 2px solid var(--main-border-colour);
  width: 100%;
  padding: var(--spacing-1) 0 var(--spacing-1) 0;
  font-size: var(--font-title-small);
`;
