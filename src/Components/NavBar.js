import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import Logo from "./Logo";
import BookDetails from "./book_page/BookDetails";

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
  text-align: right;
  padding-top: 2px;
`;
const NavItem = styled.li``;

const NavBar = props => {
  const { bookPage } = props;
  return (
    <Nav className="Nav">
      <Logo className="Logo" />
      <NavLinks>
        <NavItem>
          <a href="mailto:editor@monitorbooks.co.uk">Contact</a>
        </NavItem>
        <NavItem>
          {bookPage ? (
            <Link to="about">About</Link>
          ) : (
            <Link to="/">
              Murmur Anthology
            </Link>
          )}
        </NavItem>
      </NavLinks>
    </Nav>
  );
};

export default NavBar;
