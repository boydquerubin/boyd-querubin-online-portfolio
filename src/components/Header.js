// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;

    &:hover {
      color: #007bff;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Online Portfolio</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
