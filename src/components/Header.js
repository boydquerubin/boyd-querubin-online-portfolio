import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 2rem;
  background: #1a2836;
  transition: box-shadow 0.3s ease;

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.35);
    `}

  @media (max-width: 500px) {
    padding: 1rem 1.25rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1rem;
  font-weight: 800;
  color: #e4f0d0;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 420px) {
    gap: 1.25rem;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: ${({ $active }) => ($active ? "#ffffff" : "rgba(255,255,255,0.65)")};
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s ease;
  padding-bottom: 3px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: linear-gradient(90deg, #8fb88a, #e4f0d0);
    width: ${({ $active }) => ($active ? "100%" : "0%")};
    transition: width 0.3s ease;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 420px) {
    font-size: 0.82rem;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderContainer $scrolled={scrolled}>
      <Logo to="/">BQ Portfolio</Logo>
      <NavLinks>
        <NavLink to="/" $active={pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/about" $active={pathname === "/about"}>
          About
        </NavLink>
        <NavLink to="/multimedia" $active={pathname === "/multimedia"}>
          Multimedia
        </NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
