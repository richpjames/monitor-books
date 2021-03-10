import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

import BasketNav from "./BasketNav";

import { TextLogo } from "./TextLogo";

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLink = styled(Link)`
  color: var(--main-text-colour);
  text-decoration: none;
`;

export const Header = () => {
  return (
    <Nav>
      <Link to="/about" className="logo-container">
        <TextLogo />
      </Link>
      <NavLinks>
        {navItems.map((navItem, index) => {
          return (
            <li key={index}>
              <NavLink
                to={navItem.link}
                aria-label={navItem.ariaLabel}
                className={navItem.className}
              >
                <h4>{navItem.content}</h4>
                {}
              </NavLink>
            </li>
          );
        })}
        <BasketNav />
      </NavLinks>
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
