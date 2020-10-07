import React from "react";
import styled from "styled-components/macro";
import { navigate } from "@reach/router";

import { PageTitle } from "./Titles";
import { background, text } from "../../constants";

interface ListItemContainerProps {
  index: number;
  height: string;
  width: string;
  horizontalMargin: string;
  topMargin: string;
  to?: string;
  className?: string;
}

export const ListItemContainerWrap = styled.div<ListItemContainerProps>`
  display: flex;
  justify-content: center;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin-left: ${(props) => props.horizontalMargin};
  margin-right: ${(props) => props.horizontalMargin};
  margin-top: ${(props) => (props.index < 1 ? "0" : props.topMargin)};
  border-top: 1px solid ${text};
  border-bottom: 1px solid ${text};
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
`;

export const ListItemContainer: React.FC<ListItemContainerProps> = ({
  to,
  children,
  ...rest
}) => (
  <ListItemContainerWrap
    onClick={
      to
        ? () => {
            navigate(to);
          }
        : undefined
    }
    {...rest}
  >
    {children}
  </ListItemContainerWrap>
);
export const MetaInfoContainer = styled.div<{ index: number; width: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width};
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
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
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  width: 100%;
  text-align: center;
`;

export const ListItemPhotoWrap = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${background};
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

export const ListTitle = styled(PageTitle)`
  width: 100%;
  text-align: center;
  display: block;
`;
