import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 6rem 1.5rem;
  background:
    radial-gradient(circle at top left, rgba(255, 255, 255, 0.85), transparent 32rem),
    linear-gradient(180deg, #eef3e6 0%, #f6f8f1 100%);
`;

const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 3.5rem auto;
  text-align: center;
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem 0;
  color: #63735f;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const ProjectsTitle = styled.h2`
  font-size: clamp(2.2rem, 4vw, 3.25rem);
  color: #24313a;
  margin: 0 0 1rem 0;
  letter-spacing: -0.04em;
`;

const ProjectsSubtitle = styled.p`
  margin: 0 auto;
  color: #58656d;
  font-size: 1.05rem;
  line-height: 1.75;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  max-width: 1180px;
  margin: 0 auto;

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  grid-column: span 2;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(36, 49, 58, 0.08);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 45px rgba(36, 49, 58, 0.11);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 60px rgba(36, 49, 58, 0.16);
    border-color: rgba(36, 49, 58, 0.16);
  }

  &:first-child {
    grid-column: span 3;
  }

  &:nth-child(2) {
    grid-column: span 3;
  }

  @media (max-width: 950px) {
    grid-column: span 1;

    &:first-child,
    &:nth-child(2) {
      grid-column: span 1;
    }
  }
`;

const ImageFrame = styled.div`
  padding: 0.85rem 0.85rem 0;
  background: #ffffff;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 210px;
  object-fit: cover;
  display: block;
  border-radius: 18px;
  background: #edf1e8;

  @media (max-width: 650px) {
    height: 190px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectMeta = styled.p`
  margin: 0 0 0.55rem 0;
  color: #6f7e6b;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  font-size: 1.28rem;
  color: #24313a;
  margin: 0 0 0.8rem 0;
  line-height: 1.25;
  letter-spacing: -0.025em;
`;

const ProjectDescription = styled.p`
  font-size: 0.96rem;
  color: #526068;
  line-height: 1.65;
  margin: 0 0 1.15rem 0;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0 0 1.5rem 0;

  span {
    background: #eef3e6;
    color: #34453f;
    font-size: 0.72rem;
    font-weight: 800;
    padding: 0.38rem 0.68rem;
    border-radius: 999px;
    border: 1px solid rgba(52, 69, 63, 0.08);
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
  padding: 0.72rem 0.9rem;
  background-color: #24313a;
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 800;
  transition:
    background-color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background-color: #3c4d57;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(36, 49, 58, 0.22);
  }
`;

const SecondaryLink = styled(ProjectLink)`
  background-color: #eef3e6;
  color: #24313a;
  border: 1px solid rgba(36, 49, 58, 0.12);

  &:hover {
    background-color: #dfe8d2;
    color: #24313a;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionHeader>
        <Eyebrow>Selected Builds</Eyebrow>

        <ProjectsTitle>Personal & School Projects</ProjectsTitle>

        <ProjectsSubtitle>
          A collection of web development projects built through coursework,
          personal practice, and hands-on learning, with a focus on responsive
          layouts, interactive features, and practical user experiences.
        </ProjectsSubtitle>
      </SectionHeader>

      <ProjectList>
        <ProjectCard>
          <ImageFrame>
            <ProjectImage src="/assets/rubyxqube.webp" alt="Rubyx Qube" />
          </ImageFrame>

          <ProjectContent>
            <ProjectMeta>Full-Stack Capstone</ProjectMeta>
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

              <SecondaryLink
                href="https://github.com/boydquerubin/devmountain-react-capstone-trivia-app"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </SecondaryLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ImageFrame>
            <ProjectImage src="/assets/budbudget.webp" alt="BudBudget" />
          </ImageFrame>

          <ProjectContent>
            <ProjectMeta>React Application</ProjectMeta>
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

              <SecondaryLink
                href="https://github.com/boydquerubin/devmountain-capstone-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </SecondaryLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ImageFrame>
            <ProjectImage
              src="/assets/filipino.webp"
              alt="A Taste of Filipino Home"
            />
          </ImageFrame>

          <ProjectContent>
            <ProjectMeta>Responsive Website</ProjectMeta>
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

              <SecondaryLink
                href="https://github.com/boydquerubin/wdd131/tree/main/project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </SecondaryLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ImageFrame>
            <ProjectImage
              src="/assets/chamber.webp"
              alt="Meridian Chamber of Commerce"
            />
          </ImageFrame>

          <ProjectContent>
            <ProjectMeta>Data-Driven Layout</ProjectMeta>
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

              <SecondaryLink
                href="https://github.com/boydquerubin/wdd231/tree/main/chamber"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </SecondaryLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>

        <ProjectCard>
          <ImageFrame>
            <ProjectImage
              src="/assets/ecommerce.webp"
              alt="BRIQ-N-BRAQ Ecommerce Store"
            />
          </ImageFrame>

          <ProjectContent>
            <ProjectMeta>Ecommerce Practice</ProjectMeta>
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

              <SecondaryLink
                href="https://github.com/boydquerubin/wdd231/tree/main/project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </SecondaryLink>
            </ButtonGroup>
          </ProjectContent>
        </ProjectCard>
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;