// src/components/Home.js
import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Projects from "./Projects";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  text-align: center;
  background-color: #f4f4f4;
`;

const ProjectsSection = styled.section`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #fff;
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Hero />
      </HeroSection>
      <ProjectsSection>
        <Projects />
      </ProjectsSection>
    </HomeContainer>
  );
};

export default Home;
