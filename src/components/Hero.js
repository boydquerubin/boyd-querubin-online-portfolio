// src/components/Hero.js
import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  text-align: center;
  padding: 2rem 1rem;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 0.5rem;
`;

const HeroButton = styled.a`
  margin-top: 1.5rem;
  padding: 0.5rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTitle>Boyd Querubin</HeroTitle>
      <HeroSubtitle>Software Engineer | Web Developer | Designer</HeroSubtitle>
      <HeroButton href="/assets/Boyd-Querubin-Resume_2024.pdf" target="_blank">
        Download Resume
      </HeroButton>
    </HeroContainer>
  );
};

export default Hero;
