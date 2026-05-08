import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.section`
  padding: 5rem 1.5rem;
  background: #e4f0d0;
`;

const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 3rem auto;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  color: #24313a;
  margin: 0 0 0.85rem 0;
  letter-spacing: -0.03em;
`;

const ProjectsSubtitle = styled.p`
  margin: 0 auto;
  color: #526068;
  font-size: 1rem;
  line-height: 1.65;
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 660px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.article`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(36, 49, 58, 0.08);
  box-shadow: 0 12px 28px rgba(36, 49, 58, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 18px 38px rgba(36, 49, 58, 0.15);
  }
`;

const ImageFrame = styled.div`
  padding: 0.75rem 0.75rem 0;
  background: #ffffff;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 165px;
  object-fit: cover;
  display: block;
  border-radius: 13px;
  background: #e4f0d0;
`;

const ProjectContent = styled.div`
  padding: 1.25rem 1.3rem 1.35rem;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectMeta = styled.p`
  margin: 0 0 0.45rem 0;
  color: #66745f;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  font-size: 1.15rem;
  color: #24313a;
  margin: 0 0 0.65rem 0;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #526068;
  line-height: 1.62;
  margin: 0 0 1.05rem 0;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.42rem;
  margin: 0 0 1.35rem 0;

  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 1.45rem;
    background: #f5f8ef;
    color: #42524a;
    font-size: 0.66rem;
    font-weight: 700;
    line-height: 1;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid #dce6d3;
    white-space: nowrap;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.55rem;
  margin-top: auto;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const ProjectLink = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 1rem;
  background-color: #24313a;
  color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  border: 1px solid transparent;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background-color: #33424c;
    transform: translateY(-1px);
  }
`;

const SecondaryLink = styled(ProjectLink)`
  background-color: #ffffff;
  color: #24313a;
  border: 1px solid #ccd8bf;

  &:hover {
    background-color: #f4f7ef;
    border-color: #b9c8aa;
    color: #24313a;
  }
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <SectionHeader>

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
              <span>State</span>
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
              <span>Responsive</span>
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
              <span>Responsive</span>
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