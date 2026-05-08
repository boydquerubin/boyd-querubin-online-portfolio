import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroContainer = styled.div`
  text-align: center;
  padding: 3.5rem 2rem;
  background-color: #f9f9f9;
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const HeroImage = styled.img`
  width: 250px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin: 0 0 0.5rem 0;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin: 0.5rem 0 1.5rem 0;
`;

const HeroActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 160px;
  height: 42px;
  padding: 0 1rem;
  background-color: #2e3a45;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: bold;
  border: 1px solid transparent;
  transition: background-color 0.25s ease, transform 0.25s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #666;
    transform: translateY(-2px);
  }
`;

const SecondaryHeroButton = styled(HeroButton)`
  background-color: #ffffff;
  color: #2e3a45;
  border: 1px solid rgba(46, 58, 69, 0.2);

  &:hover {
    background-color: #f0f0f0;
    color: #2e3a45;
  }
`;

const SocialsTitle = styled.h3`
  margin: 0 0 15px 0;
  font-size: 2rem;
  color: #333;
`;

const SocialIconsList = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const SocialButton = styled.a`
  padding: 0.5rem 2rem;
  background-color: #2e3a45;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

      <HeroSubtitle>
        Web Developer | Digital Content Creator
      </HeroSubtitle>

      <HeroActions>
        <HeroButton href="/assets/BQ_GC.pdf" target="_blank" rel="noreferrer">
          View Resume
        </HeroButton>

        <SecondaryHeroButton href="/assets/BQ_GC.pdf" download>
          Download Resume
        </SecondaryHeroButton>
      </HeroActions>

      <SocialsTitle>Social Media</SocialsTitle>

      <SocialIconsList>
        <SocialButton
          href="https://www.linkedin.com/in/boydisaacquerubin/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </SocialButton>

        <SocialButton
          href="https://github.com/boydquerubin"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </SocialButton>
      </SocialIconsList>
    </HeroContainer>
  );
};

export default Hero;