import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 2rem 1rem;
  background-color: #e4f0d0;
`;

const ProjectsTitle = styled.h2`
  font-size: 2rem;
  color: #2e3a45;
  text-align: center;
  // text-shadow: 1px 1px 2px grey;
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
  background-color: #f4f4f4;
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
        <ProjectCard>
          <ProjectImage src="/assets/rubyxqube.webp" alt="Rubyx Qube" />
          <ProjectTitle>Rubyx Qube - Trivia Game App</ProjectTitle>
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
          <ProjectImage src="/assets/budbudget.webp" alt="BudBudget" />
          <ProjectTitle>BudBudget - Savings App</ProjectTitle>
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
        <ProjectCard>
          <ProjectImage src="/assets/filipino.webp" alt="A Taste of Filipino Home" />
          <ProjectTitle>A Taste of Filipino Home</ProjectTitle>
          <ProjectLink href="https://boydquerubin.github.io/wdd131/project/index.html" target="_blank">
            Deployed Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/boydquerubin/wdd131/tree/main/project"
            target="_blank"
          >
            View file on GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/assets/chamber.webp" alt="Meridian Chamber of Commerce" />
          <ProjectTitle>Meridian Chamber of Commerce</ProjectTitle>
          <ProjectLink href="https://boydquerubin.github.io/wdd231/chamber/index.html" target="_blank">
            Deployed Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/boydquerubin/wdd231/tree/main/chamber"
            target="_blank"
          >
            View file on GitHub
          </ProjectLink>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage src="/assets/ecommerce.webp" alt="BRIQ-N-BRAQ Ecommerce Store" />
          <ProjectTitle>Sample Ecommerce Store</ProjectTitle>
          <ProjectLink href="https://boydquerubin.github.io/wdd231/project/index.html" target="_blank">
            Deployed Site
          </ProjectLink>
          <ProjectLink
            href="https://github.com/boydquerubin/wdd231/tree/main/project"
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
