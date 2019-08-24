import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  width: 70%;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-left: auto;
  margin-right:auto;
  margin-top: 10vh;
`;
const Logo = styled.img`
  height: 100px;
`;
const NavLinks = styled.ul`
  list-style: none;
`;
const NavItem = styled.li``;

const NavBar = () => {
  return (
    <Nav className="Nav">
      <Logo
        className="Logo"
        src="https://www.monitorbooks.co.uk/img/monitor-bw-resized.jpg"
      />
      <NavLinks>
        <NavItem>Contact</NavItem>
        <NavItem>About</NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
