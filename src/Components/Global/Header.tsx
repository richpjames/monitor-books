import React, { useContext } from "react";
import styled from "styled-components/macro";
import { Link as GatsbyLink } from "gatsby";

import { CartContext } from "../../state/CartProvider";

import { TextLogo } from "./TextLogo";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;

  > ul {
    display: flex;
    > li {
      > a {
      }
    }
    > li:last-child {
      margin-left: auto;
    }
  }
`;

const Link = styled(GatsbyLink)<{ selected?: boolean }>`
  text-decoration: ${(props) => (props.selected ? `` : `none`)};
`;

export const Header = () => {
  const { count } = useContext(CartContext);
  let pathname = "";
  if (window) {
    pathname = window.location.pathname;
  }
  return (
    <Nav>
      <Link to="/about" className="logo-container">
        <TextLogo />
      </Link>
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
    content: "Books, ",
    className: "books",
  },
  {
    link: "/murmur-reading-series",
    ariaLabel: "Video link",
    content: "Murmur Reading Series, ",
    className: "videos",
  },
  {
    link: "/about",
    ariaLabel: "About page",
    content: "About",
    className: "about",
  },
];
