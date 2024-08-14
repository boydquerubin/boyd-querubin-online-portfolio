// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2e3a45;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #f9f9f9;
    font-weight: bold;

    &:hover {
      color: #cccccc;
      transform: scale(1.05);
      transition: transform 0.2s;
    }
  }
`;

const Logo = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #f9f9f9;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Online Portfolio</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        {/* <Link to="/about">About</Link> */}
        {/* <Link to="/projects">Projects</Link> */}
        <Link to="/contact">Contact</Link>
        <Link to="/multimedia">Multimedia</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
