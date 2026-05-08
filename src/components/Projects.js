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

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;

  span {
    background: #e9ecef;
    color: #333;
    font-size: 0.85rem;
    font-weight: 600;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Personal & School Projects</ProjectsTitle>
      <ProjectList>
        <ProjectCard>
          <ProjectImage src="/assets/rubyxqube.webp" alt="Rubyx Qube" />
          <ProjectTitle>Rubyx Qube - Trivia Game App</ProjectTitle>

          <ProjectDescription>
            An interactive trivia web application where users can create an account, answer timed questions, and track high scores. This project helped me practice React, user authentication, database interactions, game logic, and building a more engaging front-end experience.
          </ProjectDescription>

          <TechTags>
            <span>React</span>
            <span>JavaScript</span>
            <span>Supabase</span>
            <span>CSS</span>
          </TechTags>

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

          <ProjectDescription>
            A budgeting web application designed to help users organize income, expenses, and savings goals in a simple, user-friendly interface. This project focused on form handling, state management, reusable components, and presenting financial information clearly.
          </ProjectDescription>

          <TechTags>
            <span>React</span>
            <span>JavaScript</span>
            <span>Supabase</span>
            <span>State Management</span>
          </TechTags>

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

          <ProjectDescription>
            A responsive website celebrating Filipino cuisine through featured dishes, cultural storytelling, and clean visual design. This project allowed me to combine web development with personal storytelling, layout design, and mobile-friendly styling.
          </ProjectDescription>

          <TechTags>
            <span>HTML</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Responsive Design</span>
          </TechTags>

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

          <ProjectDescription>
            A chamber of commerce website project built to showcase local businesses, community information, and responsive page layouts. This project helped me practice working with JSON data, responsive design, CSS Grid, navigation structure, and dynamic content rendering.
          </ProjectDescription>

          <TechTags>
            <span>HTML</span>
            <span>CSS Grid</span>
            <span>JavaScript</span>
            <span>JSON</span>
          </TechTags>
      
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

          <ProjectDescription>
            A sample online store built to demonstrate product browsing, shopping cart interactions, and a clean customer-facing layout. This project focused on JavaScript functionality, localStorage, reusable page structure, and creating a simple eCommerce experience.
          </ProjectDescription>

          <TechTags>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>LocalStorage</span>
            <span>Responsive Design</span>
          </TechTags>

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
