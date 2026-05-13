import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

/* ── Animations ──────────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const panGradient = keyframes`
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;

/* ── Section shell ───────────────────────────────────────────── */
const ProfessionalContainer = styled.section`
  width: 100%;
  padding: 5rem 1.5rem;
  background: #f9f9f9;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(46, 58, 69, 0.035) 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;
  }
`;

const SectionInner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  text-align: center;
`;

const SectionEyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #66785f;
  margin: 0 0 0.65rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.9rem, 3.5vw, 2.6rem);
  color: #2e3a45;
  margin: 0 0 0.75rem;
  font-weight: 900;
  letter-spacing: -0.025em;
`;

const SectionDescription = styled.p`
  max-width: 680px;
  margin: 0 auto;
  color: #526068;
  font-size: 1rem;
  line-height: 1.65;
`;

/* ── Project card ────────────────────────────────────────────── */
const ProjectCard = styled.article`
  display: grid;
  grid-template-columns: ${({ $flip }) =>
    $flip ? "0.85fr 1.15fr" : "1.15fr 0.85fr"};
  gap: 2.5rem;
  align-items: center;
  padding: 2.5rem;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09);
  border: 1px solid rgba(36, 49, 58, 0.07);
  opacity: 0;

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${$delay || 0}s both;
    `}

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    padding: 1.75rem;
    gap: 1.5rem;
  }
`;

const TextSide = styled.div``;

const ProjectEyebrow = styled.p`
  color: #66785f;
  font-weight: 800;
  font-size: 0.72rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  margin: 0 0 0.6rem;
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.35rem, 2.5vw, 1.85rem);
  color: #24313a;
  margin: 0 0 1rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.25;
`;

const ProjectText = styled.p`
  color: #526068;
  line-height: 1.72;
  font-size: 0.97rem;
  margin-bottom: 1rem;
`;

const ContributionList = styled.ul`
  color: #526068;
  line-height: 1.72;
  font-size: 0.95rem;
  margin: 0 0 1.75rem 1.25rem;
  padding: 0;

  li {
    margin-bottom: 0.35rem;
    &::marker { color: #66785f; }
  }
`;

const TechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;

  span {
    display: inline-flex;
    align-items: center;
    height: 1.6rem;
    padding: 0 0.6rem;
    background: #f0f5ee;
    color: #3d5437;
    font-size: 0.68rem;
    font-weight: 700;
    border-radius: 999px;
    border: 1px solid #c8dab8;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  height: 44px;
  padding: 0 1.25rem;
  background: linear-gradient(135deg, #2e3a45, #3d4f5d);
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(135deg, #3d4f5d, #4e6370);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

/* ── Visual panels ───────────────────────────────────────────── */
const BasePanel = styled.div`
  min-height: 300px;
  border-radius: 16px;
  background-size: 300% 300%;
  animation: ${panGradient} 9s ease infinite;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2.5rem 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.04) 1px,
      transparent 1px
    );
    background-size: 20px 20px;
  }

  @media (max-width: 820px) {
    min-height: 220px;
    order: -1;
  }
`;

const PhoenixPanel = styled(BasePanel)`
  background-image: linear-gradient(
    135deg,
    #1a2d1e,
    #2e3a45,
    #1e3d28,
    #0d1b2a,
    #2e3a45
  );

  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    top: -60px;
    right: -60px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(102, 120, 95, 0.35) 0%, transparent 70%);
    filter: blur(20px);
  }
`;

const BastionPanel = styled(BasePanel)`
  background-image: linear-gradient(
    135deg,
    #0f2044,
    #1e3a5f,
    #0d2d50,
    #162849,
    #1a3460
  );

  &::after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    top: -60px;
    left: -60px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
    filter: blur(20px);
  }
`;

const PanelIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: ${float} 4s ease-in-out infinite;
  position: relative;
  z-index: 1;
`;

const VisualTitle = styled.h4`
  font-size: 1.45rem;
  font-weight: 800;
  margin: 0 0 0.65rem;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
`;

const VisualText = styled.p`
  font-size: 0.88rem;
  line-height: 1.65;
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  position: relative;
  z-index: 1;
`;

const StatRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.4rem;
  position: relative;
  z-index: 1;
`;

const Stat = styled.div`
  text-align: center;

  span:first-child {
    display: block;
    font-size: 1.4rem;
    font-weight: 900;
    color: ${({ $color }) => $color || "#a8d5a2"};
    line-height: 1;
  }

  span:last-child {
    font-size: 0.68rem;
    color: rgba(255, 255, 255, 0.55);
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
`;

/* ── Observer hook ───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Component ───────────────────────────────────────────────── */
const ProfessionalProjects = () => {
  const [phoenixRef, phoenixVisible] = useReveal();
  const [bastionRef, bastionVisible] = useReveal();

  return (
    <ProfessionalContainer>
      <SectionInner>
        <SectionHeader>
          <SectionEyebrow>Featured Work</SectionEyebrow>
          <SectionTitle>Professional Projects</SectionTitle>
          <SectionDescription>
            Real-world work where I apply web development, marketing, content
            strategy, and customer-focused design to support business goals.
          </SectionDescription>
        </SectionHeader>

        {/* ── Bastion MSP ── */}
        <ProjectCard ref={bastionRef} $visible={bastionVisible} $delay={0}>
          <TextSide>
            <ProjectEyebrow>Full-Stack · React · TypeScript · Node.js</ProjectEyebrow>
            <ProjectTitle>Bastion MSP — Company Website</ProjectTitle>
            <ProjectText>
              Designed and built the full website for Bastion MSP, a managed IT
              services provider. Developed a React frontend paired with a
              Node.js / Express backend to deliver a professional, scalable web
              presence that supports the company's services and client
              acquisition.
            </ProjectText>
            <ContributionList>
              <li>Built the complete React frontend from design to deployment.</li>
              <li>
                Developed a Node.js / Express backend handling service inquiries
                and contact forms.
              </li>
              <li>
                Implemented responsive layouts across all pages for desktop and
                mobile.
              </li>
              <li>
                Created a professional brand presence to support business
                development and client trust.
              </li>
              <li>
                Delivered a production-ready full-stack application end to end.
              </li>
            </ContributionList>
            <TechBadges>
              <span>React</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>Full-Stack</span>
            </TechBadges>
            <ButtonGroup>
              <ProjectLink
                href="https://bastionmsp.com"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </ProjectLink>
            </ButtonGroup>
          </TextSide>

          <BastionPanel>
            <PanelIcon>🛡️</PanelIcon>
            <VisualTitle>Bastion MSP</VisualTitle>
            <VisualText>
              A full-stack company website for a managed IT services provider —
              React frontend, Node.js / Express backend, built end to end.
            </VisualText>
            <StatRow>
              <Stat $color="#93c5fd">
                <span>React</span>
                <span>Frontend</span>
              </Stat>
              <Stat $color="#93c5fd">
                <span>Node</span>
                <span>Backend</span>
              </Stat>
              <Stat $color="#93c5fd">
                <span>✓</span>
                <span>Live</span>
              </Stat>
            </StatRow>
          </BastionPanel>
        </ProjectCard>

        {/* ── Phoenix Stoneworks ── */}
        <ProjectCard ref={phoenixRef} $visible={phoenixVisible} $delay={0.15} $flip>
          <PhoenixPanel>
            <PanelIcon>🪨</PanelIcon>
            <VisualTitle>Phoenix Stoneworks</VisualTitle>
            <VisualText>
              A professional business website and digital marketing project for
              a countertop fabrication and installation company serving the
              Treasure Valley.
            </VisualText>
            <StatRow>
              <Stat>
                <span>AI</span>
                <span>Integrated</span>
              </Stat>
              <Stat>
                <span>↑</span>
                <span>Leads</span>
              </Stat>
              <Stat>
                <span>✓</span>
                <span>Live</span>
              </Stat>
            </StatRow>
          </PhoenixPanel>

          <TextSide>
            <ProjectEyebrow>Website · Marketing · Lead Generation</ProjectEyebrow>
            <ProjectTitle>
              Phoenix Stoneworks Website &amp; Quote Calculator
            </ProjectTitle>
            <ProjectText>
              Built the company website and managed digital marketing support for
              Phoenix Stoneworks, a countertop fabrication and installation
              company serving the Treasure Valley. Work included website updates,
              landing page strategy, project showcases, social media support, and
              calculator-style tools that made it easier for customers to request
              quotes.
            </ProjectText>
            <ContributionList>
              <li>
                Improved the customer quote flow through a custom retail quote
                calculator.
              </li>
              <li>
                Created website and marketing content for countertop services.
              </li>
              <li>
                Integrated AI capabilities to improve the customer quote
                experience.
              </li>
              <li>Supported social media content and project showcases.</li>
              <li>
                Connected online traffic to real customer leads and
                consultations.
              </li>
            </ContributionList>
            <TechBadges>
              <span>Web Design</span>
              <span>AI Integration</span>
              <span>Lead Gen</span>
              <span>Marketing</span>
            </TechBadges>
            <ButtonGroup>
              <ProjectLink
                href="https://www.phoenix-stoneworks.com/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </ProjectLink>
              <ProjectLink
                href="https://www.phoenix-stoneworks.com/retail-quote-calculator"
                target="_blank"
                rel="noreferrer"
              >
                Quote Calculator
              </ProjectLink>
            </ButtonGroup>
          </TextSide>
        </ProjectCard>
      </SectionInner>
    </ProfessionalContainer>
  );
};

export default ProfessionalProjects;
