import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 5rem 1.5rem;
  background: #f7f8f4;
`;

const ProjectsTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: #2e3a45;
  text-align: center;
  margin-bottom: 0.75rem;
`;

const ProjectsSubtitle = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem auto;
  text-align: center;
  color: #5f6b73;
  font-size: 1.05rem;
  line-height: 1.6;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(46, 58, 69, 0.1);
  border: 1px solid rgba(46, 58, 69, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(46, 58, 69, 0.16);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  color: #2e3a45;
  margin: 0 0 0.75rem 0;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 0.96rem;
  color: #555;
  line-height: 1.6;
  margin: 0 0 1rem 0;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0 1.25rem 0;

  span {
    background: #eef3e6;
    color: #2e3a45;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;
    letter-spacing: 0.01em;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const ProjectLink = styled.a`
  flex: 1;
  text-align: center;
  padding: 0.65rem 0.9rem;
  background-color: #2e3a45;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  transition: background-color 0.25s ease, transform 0.25s ease;

  &:hover {
    background-color: #4f5f6d;
    transform: translateY(-2px);
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <ProjectsTitle>Personal & School Projects</ProjectsTitle>

      <ProjectsSubtitle>
        A collection of web development projects built through coursework,
        personal practice, and hands-on learning.
      </ProjectsSubtitle>

      <ProjectList>
        <ProjectCard>
          <ProjectImage src="/assets/rubyxqube.webp" alt="Rubyx Qube" />

          <ProjectContent>
            <ProjectTitle>Rubyx Qube - Trivia Game App</ProjectTitle>

            <ProjectDescription>
              An interactive trivia web application where users can create an
              account, answer timed questions, and track high scores. This
              project helped me practice React, user authentication, database
              interactions, game logic, and building a more engaging front-end
              experience.
            </ProjectDescription>

            <TechTags>
              <span>React</span>
              <span>JavaScript</span>
              <span>Supabase</span>
              <span>CSS</span>
            </TechTags>

            <ButtonGroup>
              <ProjectLink
                href="https://rubyxqube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </ProjectLink>

              <ProjectLink
                href="https://github.com/boydquerubin/devmountain-react-capstone-trivia-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage src="/assets/budbudget.webp" alt="BudBudget" />

          <ProjectContent>
            <ProjectTitle>BudBudget - Savings App</ProjectTitle>

            <ProjectDescription>
              A budgeting web application designed to help users organize
              income, expenses, and savings goals in a simple, user-friendly
              interface. This project focused on form handling, state
              management, reusable components, and presenting financial
              information clearly.
            </ProjectDescription>

            <TechTags>
              <span>React</span>
              <span>JavaScript</span>
              <span>Supabase</span>
              <span>State Management</span>
            </TechTags>

            <ButtonGroup>
              <ProjectLink
                href="https://budbudget.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </ProjectLink>

              <ProjectLink
                href="https://github.com/boydquerubin/devmountain-capstone-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage
            src="/assets/filipino.webp"
            alt="A Taste of Filipino Home"
          />

          <ProjectContent>
            <ProjectTitle>A Taste of Filipino Home</ProjectTitle>

            <ProjectDescription>
              A responsive website celebrating Filipino cuisine through
              featured dishes, cultural storytelling, and clean visual design.
              This project allowed me to combine web development with personal
              storytelling, layout design, and mobile-friendly styling.
            </ProjectDescription>

            <TechTags>
              <span>HTML</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>Responsive Design</span>
            </TechTags>

            <ButtonGroup>
              <ProjectLink
                href="https://boydquerubin.github.io/wdd131/project/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </ProjectLink>

              <ProjectLink
                href="https://github.com/boydquerubin/wdd131/tree/main/project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage
            src="/assets/chamber.webp"
            alt="Meridian Chamber of Commerce"
          />

          <ProjectContent>
            <ProjectTitle>Meridian Chamber of Commerce</ProjectTitle>

            <ProjectDescription>
              A chamber of commerce website project built to showcase local
              businesses, community information, and responsive page layouts.
              This project helped me practice working with JSON data,
              responsive design, CSS Grid, navigation structure, and dynamic
              content rendering.
            </ProjectDescription>

            <TechTags>
              <span>HTML</span>
              <span>CSS Grid</span>
              <span>JavaScript</span>
              <span>JSON</span>
            </TechTags>

            <ButtonGroup>
              <ProjectLink
                href="https://boydquerubin.github.io/wdd231/chamber/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </ProjectLink>

              <ProjectLink
                href="https://github.com/boydquerubin/wdd231/tree/main/chamber"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ProjectImage
            src="/assets/ecommerce.webp"
            alt="BRIQ-N-BRAQ Ecommerce Store"
          />

          <ProjectContent>
            <ProjectTitle>Sample Ecommerce Store</ProjectTitle>

            <ProjectDescription>
              A sample online store built to demonstrate product browsing,
              shopping cart interactions, and a clean customer-facing layout.
              This project focused on JavaScript functionality, localStorage,
              reusable page structure, and creating a simple eCommerce
              experience.
            </ProjectDescription>

            <TechTags>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>LocalStorage</span>
              <span>Responsive Design</span>
            </TechTags>

            <ButtonGroup>
              <ProjectLink
                href="https://boydquerubin.github.io/wdd231/project/index.html"
                target="_blank"
                rel="noreferrer"
              >
                Live Site
              </ProjectLink>

              <ProjectLink
                href="https://github.com/boydquerubin/wdd231/tree/main/project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </ProjectLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;