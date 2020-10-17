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
  @media only screen and (min-width: 600px) {
    margin-top: 5vh;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-top: 7.5vh;
  @media only screen and (min-width: 600px) {
    margin-top: 2.5vh;
  }
`;
const NavItem = styled.li`
  display: flex;
  justify-content: flex-end;
  height: 20px;
`;

export const Header = () => {
  return (
    <Nav>
      <Link to="/about">
        <Logo />
      </Link>
      <NavLinks>
        {navItems.map((navItem, index) => (
          <Link
            to={navItem.link}
            aria-label={navItem.ariaLabel}
            key={index}
            className={navItem.className}
          >
            <NavItem>
              {navItem.content}
              {navItem.component}
            </NavItem>
          </Link>
        ))}
      </NavLinks>
    </Nav>
  );
};

const navItems = [
  {
    link: "/basket",
    ariaLabel: "Basket link",
    content: "",
    component: <BasketNav />,
    className: "basket",
  },
  {
    link: "/books",
    ariaLabel: "Books link",
    content: "Books",
    className: "books",
  },
  {
    link: "/murmur-episode-one",
    ariaLabel: "Video link",
    content: "Murmur Reading Series",
    className: "videos",
  },
];
