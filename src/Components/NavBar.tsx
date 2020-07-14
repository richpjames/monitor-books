import React from "react";
import styled from "styled-components/macro";
import { Link } from "@reach/router";
import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vh;
  width: 95%;
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-right: 1.73vw;
  margin-top: 2.5vh;
  @media only screen and (max-width: 600px) {
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
          <Link to="/anthology">Murmur Anthology</Link>
        </NavItem>
        <NavItem>
          <Link to="/murmur-episode-one">Murmur Reading Series</Link>
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
