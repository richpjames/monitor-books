import React from "react";
import styled from "styled-components/macro";
import { ImageLogo } from "./ImageLogo";

const FooterWrap = styled.footer`
  margin-top: auto;
  color: var(--button-colour);
  > * {
    padding-left: var(--medium-text-spacing);
    padding-right: var(--medium-text-spacing);
  }
  a {
    text-decoration: none;
  }
  display: flex;
  align-items: center;
`;

const footerItems = [
  { text: <ImageLogo /> },
  { text: "@monitorbooks", link: "" },
  {
    text: "editor@monitorbooks.co.uk",
    link: "mailto:editor@monitorbooks.co.uk",
  },
  { text: "Salford, UK" },
];
export const Footer = () => {
  return (
    <FooterWrap className="FooterWrap">
      {footerItems.map((item) => {
        if (item.link) {
          return <a href={item.link}>{item.text}</a>;
        } else if (item.text) {
          return <span>{item.text}</span>;
        } else {
          return item;
        }
      })}
    </FooterWrap>
  );
};
