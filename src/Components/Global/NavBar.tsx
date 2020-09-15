import React from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";

import BasketNav from "./BasketNav";

import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid black;
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
const NavItem = styled.li``;

const NavBar = () => {
  return (
    <Nav>
      <Link to="/about">
        <Logo />
      </Link>
      <NavLinks>
        <NavItem>
          <Link to="/basket">
            <BasketNav />
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/books">Books</Link>
        </NavItem>
        <NavItem>
          <Link to="/murmur-episode-one">Murmur Reading Series</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
