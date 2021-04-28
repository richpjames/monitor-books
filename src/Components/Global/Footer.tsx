import React from "react";
import styled from "styled-components/macro";
import { ImageLogo } from "./ImageLogo";

const FooterWrap = styled.footer`
  margin-top: var(--medium-component-spacing);
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
  @media only screen and (min-width: 20px) {
    display: none;
  }
`;

const footerItems = [
  { text: <ImageLogo /> },
  { text: "@monitorbooks", link: "https://www.instagram.com/monitorbooks/" },
  {
    text: "editor@monitorbooks.co.uk",
    link: "mailto:editor@monitorbooks.co.uk",
  },
  { text: "Salford, UK" },
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
