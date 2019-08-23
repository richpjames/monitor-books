import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
`;
const Logo = styled.img``;

const NavBar = () => {
  return (
    <Nav className="Nav">
      <Logo
        className="Logo"
        src="https://www.monitorbooks.co.uk/img/monitor-bw-resized.jpg"
      />
    </Nav>
  );
};

export default NavBar;
