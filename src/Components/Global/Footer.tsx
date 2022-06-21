import React from "react";
import styled from "@emotion/styled";

import { ImageLogo } from "./ImageLogo";
import { mobileBreakpoint } from "../../constants";

const FooterWrap = styled.footer`
  margin-top: var(--spacing-7);
  height: var(--spacing-7);
  color: var(--button-colour);
  > * {
    padding-left: var(--spacing-3);
    padding-right: var(--spacing-3);
  }
  a {
    text-decoration: none;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    height: var(--spacing-11);
    margin-top: var(--spacing-6);
    flex-direction: column;
    > * {
      padding-bottom: var(--spacing-3);
    }
  }
`;

const footerItems = [
  { text: <ImageLogo /> },
  { text: "@monitorbooks", link: "https://www.instagram.com/monitorbooks/" },
  {
    text: "editor@monitorbooks.co.uk",
    link: "mailto:editor@monitorbooks.co.uk",
  },
  { text: "UK" },
];
export const Footer = () => {
  return (
    <FooterWrap className="FooterWrap">
      {footerItems.map((item, i) => {
        if (item.link) {
          return (
            <a href={item.link} key={i}>
              {item.text}
            </a>
          );
        } else if (item.text) {
          return <span key={i}>{item.text}</span>;
        } else {
          return item;
        }
      })}
    </FooterWrap>
  );
};
