// src/components/Projects.js
import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #f4e1d2;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled.div`
  width: 300px;
  padding: 1rem;
  background-color: #cccccc;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const ProjectLink = styled.a`
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2e3a45;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #666;
    transform: scale(1.05);
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>My Projects</ProjectsTitle>
      <ProjectList>
        {/* Example Project Card */}
        <ProjectCard>
          <ProjectImage src="/assets/rubyxqube.png" alt="Project Name" />
          <ProjectTitle>Rubyx Qube</ProjectTitle>
          <ProjectLink href="https://rubyxqube.com/" target="_blank">
            Deployed Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/boydquerubin/devmountain-react-capstone-trivia-app"
            target="_blank"
          >
            View file on GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/assets/budbudget.png" alt="Project Name" />
          <ProjectTitle>BudBudget</ProjectTitle>
          <ProjectLink href="https://budbudget.netlify.app/" target="_blank">
            Deployed Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/boydquerubin/devmountain-capstone-project"
            target="_blank"
          >
            View file on GitHub
          </ProjectLink>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
