import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
`;

const NavLinks = styled.ul`
  list-style: none;
`;
const NavItem = styled.li``;

const NavBar = () => {
  return (
    <Nav className="Nav">
      <Logo className="Logo" />
      <NavLinks>
        <NavItem>
          <a href="mailto:editor@monitorbooks.co.uk">Contact</a>
        </NavItem>
        <NavItem>About</NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
