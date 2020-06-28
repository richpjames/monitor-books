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
  font-size: 2vh;
  @media only screen and (max-width: 600px) {
    margin-top: 5vh;
    font-size: 1.7vh;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  text-align: right;
  padding-top: 2px;
  margin-right: 1.73vw;
  @media only screen and (max-width: 600px) {
    margin-top: 2.5vh;
    margin-right: 0;
    padding-left: 0;
  }
`;
const NavItem = styled.li`
  margin-top: 0.5em;
  @media only screen and (max-width: 600px) {
    margin-top: 1em;
  }
`;

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
