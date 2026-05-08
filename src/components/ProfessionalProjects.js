import React from "react";
import styled from "styled-components";

const ProfessionalContainer = styled.section`
  width: 100%;
  padding: 3rem 1rem;
  background-color: #f9f9f9;
`;

const SectionInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2e3a45;
  text-align: center;
  margin-bottom: 0.75rem;
`;

const SectionDescription = styled.p`
  max-width: 760px;
  margin: 0 auto 2rem auto;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
`;

const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2rem;
  align-items: center;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
`;

const ProjectEyebrow = styled.p`
  color: #66785f;
  font-weight: bold;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 0 0 0.5rem 0;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #333;
  margin: 0 0 1rem 0;
`;

const ProjectText = styled.p`
  color: #555;
  line-height: 1.7;
  font-size: 1.05rem;
  margin-bottom: 1rem;
`;

const ContributionList = styled.ul`
  color: #444;
  line-height: 1.7;
  margin: 0 0 1.5rem 1.25rem;
  padding: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 0.65rem 1.1rem;
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

const VisualPanel = styled.div`
  min-height: 260px;
  border-radius: 12px;
  background: linear-gradient(135deg, #2e3a45, #66785f);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

const VisualTitle = styled.h4`
  font-size: 1.6rem;
  margin: 0 0 0.75rem 0;
`;

const VisualText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const ProfessionalProjects = () => {
  return (
    <ProfessionalContainer>
      <SectionInner>
        <SectionTitle>Professional Projects</SectionTitle>
        <SectionDescription>
          Real-world work where I apply web development, marketing, content strategy,
          and customer-focused design to support business goals.
        </SectionDescription>

        <ProjectCard>
          <div>
            <ProjectEyebrow>Website • Marketing • Lead Generation</ProjectEyebrow>
            <ProjectTitle>Phoenix Stoneworks Website & Quote Calculator</ProjectTitle>
            <ProjectText>
              I managed web and digital marketing support for Phoenix Stoneworks, a countertop fabrication and installation company serving the Treasure Valley. My work included website updates, landing page strategy, project showcase content, social media support, and calculator-style tools that made it easier for customers to request quotes.
            </ProjectText>
            <ContributionList>
              <li>Improved the customer quote flow through a custom retail quote calculator.</li>
              <li>Created website and marketing content for countertop services.</li>
              <li>Integrated AI capabilities into the company website to improve the customer quote experience.</li>
              <li>Supported social media content and project showcases.</li>
              <li>Connected online traffic to real customer leads and consultations.</li>
            </ContributionList>
            <ButtonGroup>
              <ProjectLink href="https://www.phoenix-stoneworks.com/" target="_blank" rel="noreferrer">
                Visit Website
              </ProjectLink>
              <ProjectLink href="https://www.phoenix-stoneworks.com/retail-quote-calculator" target="_blank" rel="noreferrer">
                View Quote Calculator
              </ProjectLink>
            </ButtonGroup>
          </div>

          <VisualPanel>
            <VisualTitle>Phoenix Stoneworks</VisualTitle>
            <VisualText>
              A professional project combining web development, marketing strategy,
              customer experience, and practical business growth.
            </VisualText>
          </VisualPanel>
        </ProjectCard>
      </SectionInner>
    </ProfessionalContainer>
  );
};

export default ProfessionalProjects;
