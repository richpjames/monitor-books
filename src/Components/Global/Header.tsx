import React from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";

import BasketNav from "./BasketNav";

import Logo from "./Logo";
import { text } from "../../constants";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${text};
  padding-bottom: 0.5rem;
  padding-left: 0.5rem;
  @media only screen and (min-width: 600px) {
    margin-top: 5vh;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-top: 7.5vh;
  display: inline;
  @media only screen and (min-width: 600px) {
    display: flex;
    margin-top: 2.5vh;
  }
`;
const NavItem = styled.li`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  padding-left: 1rem;
  padding-right: 1rem;
  @media only screen and (min-width: 600px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

export const Header = () => {
  return (
    <Nav>
      <Link to="/about">
        <Logo />
      </Link>
      <NavLinks>
        {navItems.map((navItem, index) => (
          <NavItem>
            <Link
              to={navItem.link}
              aria-label={navItem.ariaLabel}
              key={index}
              className={navItem.className}
            >
              {navItem.content}
              {navItem.component}
            </Link>
          </NavItem>
        ))}
      </NavLinks>
    </Nav>
  );
};

const navItems = [
  {
    link: "/murmur-episode-one",
    ariaLabel: "Video link",
    content: "Videos",
    className: "videos",
  },
  {
    link: "/about",
    ariaLabel: "About page",
    content: "About",
    className: "about",
  },
  {
    link: "/books",
    ariaLabel: "Books link",
    content: "Books",
    className: "books",
  },
  {
    link: "/basket",
    ariaLabel: "Basket link",
    content: "",
    component: <BasketNav />,
    className: "basket",
  },
];
