import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import projects from "../data/projects";

/* ── Animations ──────────────────────────────────────────────── */
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(44px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

/* ── Section layout ──────────────────────────────────────────── */
const ProjectsContainer = styled.section`
  padding: 5.5rem 1.5rem;
  background: #e4f0d0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(46, 58, 69, 0.045) 1px,
      transparent 1px
    );
    background-size: 28px 28px;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    padding: 4rem 1rem;
  }
`;

const SectionHeader = styled.div`
  max-width: 760px;
  margin: 0 auto 3.5rem auto;
  text-align: center;
  position: relative;
`;

const ProjectsTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 900;
  margin: 0 0 0.85rem 0;
  letter-spacing: -0.03em;
  background: linear-gradient(
    90deg,
    #24313a 0%,
    #66785f 40%,
    #24313a 60%,
    #24313a 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 6s linear infinite;
`;

const ProjectsSubtitle = styled.p`
  margin: 0 auto;
  color: #526068;
  font-size: 1rem;
  line-height: 1.65;
`;

/* ── Grid ────────────────────────────────────────────────────── */
const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.75rem;
  max-width: 1080px;
  margin: 0 auto;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

/* ── Card ────────────────────────────────────────────────────── */
const ProjectCard = styled.article`
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(36, 49, 58, 0.08);
  box-shadow: 0 8px 24px rgba(36, 49, 58, 0.09);
  display: flex;
  flex-direction: column;
  opacity: 0;

  ${({ $visible, $delay }) =>
    $visible &&
    css`
      animation: ${slideUp} 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${$delay}s both;
    `}

  transition: transform 0.28s ease, box-shadow 0.28s ease,
    border-color 0.28s ease;

  &:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 20px 45px rgba(36, 49, 58, 0.16),
      0 0 0 1.5px rgba(102, 120, 95, 0.35);
    border-color: rgba(102, 120, 95, 0.3);
  }
`;

/* ── Accent header (replaces screenshot) ────────────────────── */
const AccentHeader = styled.div`
  height: 115px;
  background: ${({ $gradient }) => $gradient};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  /* Dot pattern overlay */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(
      rgba(255, 255, 255, 0.15) 1px,
      transparent 1px
    );
    background-size: 18px 18px;
  }

  /* Glow highlight top-right */
  &::after {
    content: "";
    position: absolute;
    top: -40px;
    right: -40px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.14);
    filter: blur(25px);
  }

  transition: filter 0.28s ease;

  ${ProjectCard}:hover & {
    filter: brightness(1.06);
  }
`;

const EmojiIcon = styled.span`
  font-size: 2.8rem;
  line-height: 1;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3));
  user-select: none;
`;

/* ── Card body ───────────────────────────────────────────────── */
const ProjectContent = styled.div`
  padding: 1.25rem 1.3rem 1.35rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectMeta = styled.p`
  margin: 0 0 0.4rem 0;
  color: #66785f;
  font-size: 0.67rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  font-size: 1.08rem;
  color: #24313a;
  margin: 0 0 0.65rem 0;
  line-height: 1.3;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  font-size: 0.88rem;
  color: #526068;
  line-height: 1.62;
  margin: 0 0 1rem 0;
  flex: 1;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.42rem;
  margin: 0 0 1.25rem 0;

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
  gap: 0.65rem;
  margin-top: auto;

  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

const ProjectLink = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 1rem;
  background-color: #2e3a45;
  color: #ffffff;
  border-radius: 7px;
  text-decoration: none;
  font-size: 0.86rem;
  font-weight: 700;
  border: 1px solid transparent;
  transition: background-color 0.25s ease, transform 0.25s ease,
    box-shadow 0.25s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: #3d4f5d;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

const GhostLink = styled(ProjectLink)`
  background-color: transparent;
  color: #2e3a45;
  border: 1.5px solid rgba(46, 58, 69, 0.28);
  box-shadow: none;

  &:hover {
    background-color: rgba(46, 58, 69, 0.06);
    border-color: rgba(46, 58, 69, 0.5);
    box-shadow: none;
    color: #2e3a45;
  }
`;

/* ── Component ───────────────────────────────────────────────── */
const Projects = () => {
  const listRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ProjectsContainer>
      <SectionHeader>
        <ProjectsTitle>Personal &amp; School Projects</ProjectsTitle>
        <ProjectsSubtitle>
          A collection of web development projects built through coursework,
          personal practice, and hands-on learning — focused on responsive
          layouts, interactive features, and practical user experiences.
        </ProjectsSubtitle>
      </SectionHeader>

      <ProjectList ref={listRef}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} $visible={visible} $delay={i * 0.09}>
            <AccentHeader $gradient={p.gradient}>
              <EmojiIcon>{p.emoji}</EmojiIcon>
            </AccentHeader>

            <ProjectContent>
              <ProjectMeta>{p.category}</ProjectMeta>
              <ProjectTitle>{p.title}</ProjectTitle>
              <ProjectDescription>{p.description}</ProjectDescription>

              <TechTags>
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </TechTags>

              <ButtonGroup>
                <ProjectLink href={p.live} target="_blank" rel="noreferrer">
                  Live Site
                </ProjectLink>
                {p.github && (
                  <GhostLink href={p.github} target="_blank" rel="noreferrer">
                    GitHub
                  </GhostLink>
                )}
              </ButtonGroup>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
