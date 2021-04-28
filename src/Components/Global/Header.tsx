import React, { useContext, useState } from "react";
import styled from "styled-components/macro";
import { Link as GatsbyLink } from "gatsby";

import { mobileBreakpoint } from "../../constants";

import { CartContext } from "../../state/CartProvider";

import { TextLogo } from "./TextLogo";

const Nav = styled.nav<{ showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: var(--small-component-spacing);
  font-size: var(--font-title-medium);
  > h3 {
    display: none;
  }
  > a > div {
    padding-top: 0;
    display: block;
  }
  > ul {
    display: flex;
    flex-direction: row;
  }
  li {
    padding: var(--x-small-text-spacing);
  }
  li:last-child {
    margin-left: auto;
  }
  li:first-child {
    padding-left: 0;
  }

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--xx-small-component-spacing);
    width: min(var(--page-max-width), 95%);

    > h3 {
      display: flex;
      width: 100%;
      justify-content: center;
      border-top: var(--line-thickness) solid var(--main-border-colour);
    }
    > a > div {
      padding: var(--x-small-component-spacing) 0;
      display: flex;
      justify-content: center;
    }
    > ul {
      flex-direction: column;
      display: ${({ showMenu }) => (showMenu ? "block" : "none")};
      border-bottom: ${({ showMenu }) =>
        showMenu
          ? "var(--line-thickness) solid var(--main-border-colour)"
          : "none"};
    }
    li:last-child {
      margin-left: 0;
    }
    li:first-child {
      padding-left: var(--x-small-text-spacing);
    }
  }
`;

const Link = styled(GatsbyLink)<{ selected?: boolean }>`
  text-decoration: ${(props) => (props.selected ? `` : `none`)};
  text-decoration-thickness: var(--line-thickness);
  text-underline-offset: var(--x-small-text-spacing);
`;

export const Header = () => {
  const { count } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  let pathname = "";
  if (typeof window !== "undefined") {
    pathname = window.location.pathname;
  }
  return (
    <Nav showMenu={showMenu}>
      <Link to="/about" className="logo-container">
        <TextLogo />
      </Link>
      <h3 onClick={() => setShowMenu((prevState) => !prevState)}>Menu</h3>
      <ul>
        {navItems.map((navItem, index) => {
          const { link, ariaLabel, className, content } = navItem;
          return (
            <li key={index}>
              <Link
                to={link}
                aria-label={ariaLabel}
                className={className}
                selected={new RegExp(link).test(pathname)}
              >
                {content}
              </Link>
              {index < navItems.length - 1 ? `, ` : null}
            </li>
          );
        })}
        <li>
          <Link
            to="/basket"
            aria-label="Basket Page"
            className="basket"
            selected={/basket/.test(pathname)}
          >
            Basket ({count})
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

const navItems = [
  {
    link: "/books",
    ariaLabel: "Books link",
    content: "Books",
    className: "books",
  },
  {
    link: "/murmur-reading-series",
    ariaLabel: "Video link",
    content: "Murmur Reading Series",
    className: "videos",
  },
  {
    link: "/about",
    ariaLabel: "About page",
    content: "About",
    className: "about",
  },
];
