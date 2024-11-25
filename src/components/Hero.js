import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroContainer = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  background-color: #f9f9f9;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-top: 0.5rem;
`;

const HeroButton = styled.a`
  margin: 1.5rem;
  padding: 0.5rem 2rem;
  background-color: #2e3a45;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #666;
    transform: scale(1.05);
  }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const HeroImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SocialsTitle = styled.h3`
  margin-top: 2rem;
  margin-bottom: 15px;
  font-size: 2rem;
  color: #333;
`;

const SocialIconsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const SocialButton = styled.a`
  padding: 0.5rem 2rem;
  background-color: #2e3a45;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #666;
    transform: scale(1.05);
  }

  & > svg {
    margin-right: 0.5rem;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImageWrapper>
        <HeroImage src="/assets/linkedin.jpg" alt="Boyd Querubin" />
      </HeroImageWrapper>
      <HeroTitle>Boyd Querubin</HeroTitle>
      <HeroSubtitle>Software Developer | Digital Marketer</HeroSubtitle>
      <HeroButton href="/assets/boyd_querubin_11-24.pdf" target="_blank">
        Download Resume
      </HeroButton>
      <SocialsTitle>Social Media</SocialsTitle>
      <SocialIconsList>
        <SocialButton
          href="https://www.linkedin.com/in/boydisaacquerubin/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </SocialButton>
        <SocialButton href="https://github.com/boydquerubin" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </SocialButton>
      </SocialIconsList>
    </HeroContainer>
  );
};

export default Hero;
