import React from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";
import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  width: 95%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
  @media only screen and (max-width: 500px) {
    margin-top: 5vh;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-right: 1.73vw;
`;
const NavItem = styled.li`
  margin-top: 0.5em;
`;

const NavBar = () => {
  return (
    <Nav>
      <Logo />
      <NavLinks>
        <NavItem>
          <a href="mailto:editor@monitorbooks.co.uk">Contact</a>
        </NavItem>
        <NavItem>
          <Link to="about">About</Link>

          <Link to="/anthology">Murmur Anthology</Link>
          <Link to="/propositions">Propositions</Link>
          <Link to="/basket">Basket</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
