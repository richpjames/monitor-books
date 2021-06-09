import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/macro";
import { Link as GatsbyLink } from "gatsby";

import { mobileBreakpoint } from "../../constants";

import { CartContext } from "../../state/CartProvider";
import useMediaQuery from "../../hooks/useMediaQuery";

import { TextLogo } from "./TextLogo";
import { Burger } from "../Common/Burger";



const HeaderStyles = styled.header<{ showMenu: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: var(--small-component-spacing);
  font-size: var(--font-title-medium);

> a > div {
    padding-top: 0;
    display: block;
  }

> nav {
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
  }

  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-bottom: var(--xx-small-component-spacing);
    width: min(var(--page-max-width), 95%);
    flex-direction: row;
    font-size: var(--font-size-small);
    > a > div {
      padding: var(--x-small-component-spacing) 0;
      display: flex;
      justify-content: center;
      width: 75%;
    }
    
  > nav {
    flex: 1;
    padding-top: var(--small-component-spacing);
    > ul {
      flex-direction: column;
      display: ${({ showMenu }) => (showMenu ? "block" : "none")};
      border: ${({ showMenu }) =>
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
  }
`

const Link = styled(GatsbyLink) <{ selected?: boolean }>`
  text-decoration: ${(props) => (props.selected ? `` : `none`)};
  text-decoration-thickness: var(--line-thickness);
  text-underline-offset: var(--x-small-text-spacing);
`;

export const Header = () => {
  const { count } = useContext(CartContext);
  const [showMenu, setShowMenu] = useState(false);
  const [pathname, setPathname] = useState('');
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint})`);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const newPath = window.location.pathname;
      if (pathname !== newPath) {
        setShowMenu(() => false)
      }
      setPathname(() => window.location.pathname)
    }
  }, [pathname])

  return (
    <HeaderStyles showMenu={showMenu}>
      <Link to="/about" className="logo-container">
        <TextLogo />
      </Link>
      <nav>
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
                {!isMobile && index < navItems.length - 1 ? `, ` : null}
              </li>
            );
          })}
          <li>
            <Link
              to="/basket"
              aria-label="Basket Page"
              className="basket"
              selected={/basket/.test(pathname)}
              id="header-basket-items"
            >
              Basket ({count})
          </Link>
          </li>
        </ul>
      </nav>
      {!showMenu && <Burger onClick={() => { setShowMenu((prevShowMenu) => !prevShowMenu) }} />}
    </HeaderStyles>
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
