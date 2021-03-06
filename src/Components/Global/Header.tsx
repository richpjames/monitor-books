import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";

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
    margin-left: 2.5rem;
    margin-right: 2.5rem;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-top: 2.5vh;
  display: inline;
  @media only screen and (min-width: 600px) {
    display: flex;
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

const NavLink = styled(Link)`
  color: ${text};
  text-decoration: none;
`;

const Seperator = styled.span`
  display: none;
  @media only screen and (min-width: 600px) {
    display: block;
  }
`;

export const Header = () => {
  return (
    <Nav>
      <Link to="/about" className="logo-container">
        <Logo />
      </Link>
      <NavLinks>
        {navItems.map((navItem, index) => {
          return (
            <React.Fragment key={index}>
              {index !== 0 && index <= navItems.length - 2 && (
                <Seperator>{String.fromCharCode(8226)}</Seperator>
              )}

              <NavItem key={index}>
                <NavLink
                  to={navItem.link}
                  aria-label={navItem.ariaLabel}
                  className={navItem.className}
                >
                  {navItem.content}
                  {navItem.component}
                </NavLink>
              </NavItem>
            </React.Fragment>
          );
        })}
      </NavLinks>
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
  {
    link: "/basket",
    ariaLabel: "Basket link",
    content: "",
    component: <BasketNav />,
    className: "basket",
  },
];
