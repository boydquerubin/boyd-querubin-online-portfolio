import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(45px, -65px) scale(1.1); }
  50% { transform: translate(-25px, -25px) scale(0.93); }
  75% { transform: translate(20px, 50px) scale(1.06); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-60px, 40px) scale(1.18); }
  66% { transform: translate(40px, -55px) scale(0.86); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(36px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const spinRing = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(102, 120, 95, 0); }
  50%       { box-shadow: 0 0 35px 10px rgba(102, 120, 95, 0.45); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const scrollBounce = keyframes`
  0%, 100% { transform: translateY(0) rotate(45deg); }
  50%       { transform: translateY(7px) rotate(45deg); }
`;

/* ── Background ─────────────────────────────────────────────── */
const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(150deg, #0d1b2a 0%, #11202d 40%, #192c1e 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 5rem 2rem 6rem;
`;

/* ── Floating orbs ──────────────────────────────────────────── */
const OrbOne = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  top: -15%;
  left: -18%;
  border-radius: 50%;
  filter: blur(70px);
  background: radial-gradient(circle, rgba(102, 120, 95, 0.18) 0%, transparent 70%);
  animation: ${float1} 17s ease-in-out infinite;
  pointer-events: none;
`;

const OrbTwo = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: 20%;
  right: -12%;
  border-radius: 50%;
  filter: blur(80px);
  background: radial-gradient(circle, rgba(46, 58, 69, 0.55) 0%, transparent 70%);
  animation: ${float2} 21s ease-in-out infinite;
  animation-delay: 3s;
  pointer-events: none;
`;

const OrbThree = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  bottom: 2%;
  left: 12%;
  border-radius: 50%;
  filter: blur(90px);
  background: radial-gradient(circle, rgba(102, 120, 95, 0.13) 0%, transparent 70%);
  animation: ${float1} 24s ease-in-out infinite;
  animation-delay: 8s;
  pointer-events: none;
`;

const OrbFour = styled.div`
  position: absolute;
  width: 220px;
  height: 220px;
  bottom: 22%;
  right: 8%;
  border-radius: 50%;
  filter: blur(55px);
  background: radial-gradient(circle, rgba(228, 240, 208, 0.09) 0%, transparent 70%);
  animation: ${float2} 15s ease-in-out infinite;
  animation-delay: 5s;
  pointer-events: none;
`;

/* ── Profile image with spinning ring ───────────────────────── */
const ImageOuter = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  margin: 0 auto 2.2rem;
  border-radius: 50%;
  animation: ${fadeUp} 0.9s ease both,
             ${glowPulse} 3.5s ease-in-out 1s infinite;
`;

const SpinningRing = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #66785f, #c8dfc0, #2e3a45, #e4f0d0, #66785f);
  animation: ${spinRing} 5s linear infinite;
`;

const ImageInner = styled.div`
  position: absolute;
  inset: 7px;
  border-radius: 50%;
  overflow: hidden;
  background: #0d1b2a;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;

/* ── Text content ───────────────────────────────────────────── */
const HeroContent = styled.div`
  position: relative;
  z-index: 10;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 5.5vw, 4rem);
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 0.4rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  animation: ${fadeUp} 0.9s ease 0.15s both;

  em {
    font-style: normal;
    background: linear-gradient(130deg, #a8d5a2, #e4f0d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const TypewriterRow = styled.p`
  font-size: clamp(1rem, 2.4vw, 1.28rem);
  color: #8fb88a;
  font-weight: 500;
  margin: 0 0 2.5rem;
  min-height: 1.9em;
  animation: ${fadeUp} 0.9s ease 0.3s both;
`;

const Cursor = styled.span`
  display: inline-block;
  width: 2px;
  height: 1em;
  background: #8fb88a;
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 1s step-end infinite;
`;

/* ── Buttons ────────────────────────────────────────────────── */
const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
  animation: ${fadeUp} 0.9s ease 0.45s both;
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 155px;
  height: 48px;
  padding: 0 1.5rem;
  background: linear-gradient(135deg, #4a6644, #66785f);
  color: #fff;
  border-radius: 10px;
  text-decoration: none;
  font-size: 0.93rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  border: 1px solid rgba(102, 120, 95, 0.5);
  box-shadow: 0 4px 18px rgba(102, 120, 95, 0.35);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #587255, #7a9172);
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(102, 120, 95, 0.55);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const SecondaryBtn = styled(PrimaryBtn)`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: none;

  &:hover {
    background: rgba(255, 255, 255, 0.13);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.25);
    transform: translateY(-3px);
  }
`;

/* ── Socials ────────────────────────────────────────────────── */
const ConnectLabel = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
  margin: 0 0 0.9rem;
  animation: ${fadeUp} 0.9s ease 0.6s both;
`;

const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.85rem;
  flex-wrap: wrap;
  animation: ${fadeUp} 0.9s ease 0.75s both;
`;

const SocialBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 1.4rem;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff;
    transform: translateY(-2px);
  }
`;

/* ── Scroll hint ────────────────────────────────────────────── */
const ScrollHint = styled.div`
  position: absolute;
  bottom: 2.2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  color: rgba(255, 255, 255, 0.22);
  font-size: 0.62rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  animation: ${fadeUp} 0.9s ease 1s both;
`;

const ArrowChevron = styled.div`
  width: 16px;
  height: 16px;
  border-right: 2px solid rgba(255, 255, 255, 0.22);
  border-bottom: 2px solid rgba(255, 255, 255, 0.22);
  animation: ${scrollBounce} 1.6s ease-in-out infinite;
`;

/* ── Component ──────────────────────────────────────────────── */
const ROLES = [
  "Web Developer",
  "Digital Content Creator",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const Hero = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!deleting && text.length < target.length) {
      timeout = setTimeout(() => setText(target.slice(0, text.length + 1)), 90);
    } else if (!deleting && text.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(t => t.slice(0, -1)), 45);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <HeroSection>
      <OrbOne />
      <OrbTwo />
      <OrbThree />
      <OrbFour />

      <HeroContent>
        <ImageOuter>
          <SpinningRing />
          <ImageInner>
            <ProfileImg src="/assets/linkedin.jpg" alt="Boyd Querubin" />
          </ImageInner>
        </ImageOuter>

        <Name>
          Boyd <em>Querubin</em>
        </Name>

        <TypewriterRow>
          {text}
          <Cursor />
        </TypewriterRow>

        <ButtonRow>
          <PrimaryBtn href="/assets/BQ_GC.pdf" target="_blank" rel="noreferrer">
            View Resume
          </PrimaryBtn>
          <SecondaryBtn href="/assets/BQ_GC.pdf" download>
            Download Resume
          </SecondaryBtn>
        </ButtonRow>

        <ConnectLabel>Connect with me</ConnectLabel>

        <SocialRow>
          <SocialBtn
            href="https://www.linkedin.com/in/boydisaacquerubin/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </SocialBtn>
          <SocialBtn
            href="https://github.com/boydquerubin"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </SocialBtn>
        </SocialRow>
      </HeroContent>

      <ScrollHint>
        Scroll
        <ArrowChevron />
      </ScrollHint>
    </HeroSection>
  );
};

export default Hero;
