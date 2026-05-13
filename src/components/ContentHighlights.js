import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

/* ── Animations ──────────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const float1 = keyframes`
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(30px, -40px) scale(1.08); }
  70% { transform: translate(-20px, 20px) scale(0.95); }
`;

const float2 = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-35px, 30px); }
`;

/* ── Scroll reveal hook ──────────────────────────────────────── */
function useReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Page hero ───────────────────────────────────────────────── */
const PageHero = styled.section`
  background: linear-gradient(150deg, #0d1b2a 0%, #12202e 45%, #192c1e 100%);
  padding: 4.5rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroOrb1 = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: -20%;
  left: -10%;
  border-radius: 50%;
  filter: blur(80px);
  background: radial-gradient(circle, rgba(102, 120, 95, 0.2) 0%, transparent 70%);
  animation: ${float1} 18s ease-in-out infinite;
  pointer-events: none;
`;

const HeroOrb2 = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  bottom: -10%;
  right: -8%;
  border-radius: 50%;
  filter: blur(70px);
  background: radial-gradient(circle, rgba(46, 58, 69, 0.5) 0%, transparent 70%);
  animation: ${float2} 22s ease-in-out infinite;
  pointer-events: none;
`;

const HeroEyebrow = styled.p`
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8fb88a;
  margin: 0 0 0.75rem;
  position: relative;
  animation: ${fadeUp} 0.8s ease both;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.025em;
  line-height: 1.1;
  position: relative;
  animation: ${fadeUp} 0.8s ease 0.1s both;

  em {
    font-style: normal;
    background: linear-gradient(130deg, #a8d5a2, #e4f0d0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const HeroDesc = styled.p`
  max-width: 580px;
  margin: 0 auto 2.2rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1.7;
  position: relative;
  animation: ${fadeUp} 0.8s ease 0.2s both;
`;

const BadgeRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.65rem;
  flex-wrap: wrap;
  position: relative;
  animation: ${fadeUp} 0.8s ease 0.35s both;
`;

const Badge = styled.a`
  display: inline-flex;
  align-items: center;
  height: 36px;
  padding: 0 1.1rem;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(102, 120, 95, 0.35);
    border-color: rgba(102, 120, 95, 0.6);
    color: #fff;
  }
`;

/* ── Content sections ────────────────────────────────────────── */
const ContentSection = styled.section`
  padding: 5rem 1.5rem;
  background: ${({ $alt }) => ($alt ? "#e4f0d0" : "#f9f9f9")};
  position: relative;
  scroll-margin-top: 64px;

  ${({ $visible }) =>
    $visible &&
    css`
      & > * {
        animation: ${fadeUp} 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
      }
    `}

  @media (max-width: 600px) {
    padding: 3.5rem 1rem;
  }
`;

const SectionInner = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const SectionEyebrow = styled.p`
  text-align: center;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #66785f;
  margin: 0 0 0.6rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.7rem, 3.5vw, 2.4rem);
  font-weight: 900;
  color: #24313a;
  margin: 0 0 0.75rem;
  letter-spacing: -0.025em;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #526068;
  font-size: 0.97rem;
  line-height: 1.65;
  max-width: 560px;
  margin: 0 auto 2.5rem;
`;

/* ── Video carousel ──────────────────────────────────────────── */
const VideoWrapper = styled.div`
  padding: 0.6rem;

  @media (max-width: 600px) {
    padding: 0.4rem;
  }
`;

const PlayerCard = styled.div`
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.14);
  background: #000;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
  }
`;

const PlayerAspect = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;

  @supports not (aspect-ratio: 16 / 9) {
    padding-top: 56.25%;
    height: 0;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`;

/* ── Reel carousel ───────────────────────────────────────────── */
const ReelWrapper = styled.div`
  padding: 0.6rem;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 0.4rem;
  }
`;

const ReelCard = styled.div`
  width: clamp(200px, 55vw, 265px);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.18);
  background: #000;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  }

  @media (max-width: 600px) {
    width: clamp(220px, 75vw, 280px);
  }
`;

const ReelAspect = styled.div`
  position: relative;
  aspect-ratio: 9 / 16;

  @supports not (aspect-ratio: 9 / 16) {
    padding-top: 177.78%;
    height: 0;
  }
`;

const ReelFrame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background: #000;
`;

const toInstagramEmbed = (url) => {
  const match = url.match(/instagram\.com\/reel\/([A-Za-z0-9_-]+)/i);
  if (!match) return null;
  return `https://www.instagram.com/reel/${match[1]}/embed`;
};

const ReelEmbed = ({ url, title = "Reel" }) => {
  const embed = toInstagramEmbed(url);
  if (!embed) return null;
  return (
    <ReelWrapper>
      <ReelCard>
        <ReelAspect>
          <ReelFrame
            src={embed}
            title={title}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </ReelAspect>
      </ReelCard>
    </ReelWrapper>
  );
};

/* ── Contact section ─────────────────────────────────────────── */
const ContactSection = styled.section`
  background: linear-gradient(150deg, #0d1b2a 0%, #12202e 50%, #192c1e 100%);
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    padding: 4rem 1.5rem;
  }
`;

const ContactCard = styled.div`
  max-width: 520px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const ContactEyebrow = styled.p`
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8fb88a;
  margin: 0 0 0.75rem;
`;

const ContactTitle = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 900;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.025em;
`;

const ContactText = styled.p`
  color: rgba(255, 255, 255, 0.65);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 2rem;
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  height: 50px;
  padding: 0 2rem;
  background: linear-gradient(135deg, #4a6644, #66785f);
  color: #fff;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  border: 1px solid rgba(102, 120, 95, 0.5);
  box-shadow: 0 4px 18px rgba(102, 120, 95, 0.35);
  transition: all 0.3s ease;
  letter-spacing: 0.01em;

  &:hover {
    background: linear-gradient(135deg, #587255, #7a9172);
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(102, 120, 95, 0.55);
  }
`;

/* ── Carousel configs ────────────────────────────────────────── */
const responsiveVideo = {
  desktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  tablet:  { breakpoint: { max: 1024, min: 560 },  items: 2 },
  mobile:  { breakpoint: { max: 560,  min: 0 },    items: 1 },
};

const responsiveReels = {
  desktop: { breakpoint: { max: 4000, min: 900 },  items: 3 },
  tablet:  { breakpoint: { max: 900,  min: 560 },  items: 2 },
  mobile:  { breakpoint: { max: 560,  min: 0 },    items: 1 },
};

/* ── Data ────────────────────────────────────────────────────── */
const youtubeVideos = [
  "https://www.youtube.com/watch?v=-6f-Q4brhpY",
  "https://www.youtube.com/watch?v=DmqZSUroVEs&t=151s",
  "https://www.youtube.com/watch?v=OLrvD-Jz1oQ",
  "https://www.youtube.com/watch?v=Co3Jlu0ymg0",
  "https://www.youtube.com/watch?v=Y1TGu4yvEJg&t=6s",
  "https://www.youtube.com/watch?v=0ODeIGjOpnA",
  "https://www.youtube.com/watch?v=gRBfOb2PHgk",
  "https://www.youtube.com/watch?v=qOW8cvq2hU0",
];

const reelsFeatured = [
  "https://www.instagram.com/reel/C3bJqZGukqf/?hl=en",
  "https://www.instagram.com/reel/C4gju2zuwEo/?hl=en",
  "https://www.instagram.com/reel/C3_Lrkyymyf/?hl=en",
  "https://www.instagram.com/reel/C2kiag-L8g1/?hl=en",
  "https://www.instagram.com/reel/C4q2dhvSdr6/?hl=en",
];

const reels3D = [
  "https://www.instagram.com/reel/CkQ0ytPpjce/?hl=en",
  "https://www.instagram.com/reel/CjqikoivHjm/?hl=en",
  "https://www.instagram.com/reel/CoK4q-KLSXd/?hl=en",
  "https://www.instagram.com/reel/ClZDKeTJ-Eu/?hl=en",
  "https://www.instagram.com/reel/Cj-1nilJPdb/?hl=en",
];

/* ── Component ───────────────────────────────────────────────── */
const ContentHighlights = () => {
  const [tutRef, tutVisible]  = useReveal(0.08);
  const [reelRef, reelVisible] = useReveal(0.08);
  const [animRef, animVisible] = useReveal(0.08);

  return (
    <main>
      {/* ── Page hero ── */}
      <PageHero>
        <HeroOrb1 />
        <HeroOrb2 />
        <HeroEyebrow>Portfolio</HeroEyebrow>
        <HeroTitle>
          Content <em>Highlights</em>
        </HeroTitle>
        <HeroDesc>
          A collection of video, social, and animation work showing my
          experience with storytelling, editing, platform-specific content,
          and visual communication.
        </HeroDesc>
        <BadgeRow>
          <Badge href="#tutorials">Tutorial Videos</Badge>
          <Badge href="#reels">Social Reels</Badge>
          <Badge href="#animation">3D Animation</Badge>
        </BadgeRow>
      </PageHero>

      {/* ── Tutorial Videos ── */}
      <ContentSection id="tutorials" $alt={false} $visible={tutVisible}>
        <SectionInner ref={tutRef}>
          <SectionEyebrow>YouTube</SectionEyebrow>
          <SectionTitle>Tutorial &amp; Educational Videos</SectionTitle>
          <SectionSubtitle>
            Step-by-step instructional content covering web development,
            tools, and workflows — built to educate and engage online audiences.
          </SectionSubtitle>
          <Carousel
            responsive={responsiveVideo}
            infinite
            keyBoardControl
            containerClass="carousel-container"
            itemClass="carousel-item-padding"
          >
            {youtubeVideos.map((url) => (
              <VideoWrapper key={url}>
                <PlayerCard>
                  <PlayerAspect>
                    <StyledReactPlayer
                      url={url}
                      width="100%"
                      height="100%"
                      controls
                    />
                  </PlayerAspect>
                </PlayerCard>
              </VideoWrapper>
            ))}
          </Carousel>
        </SectionInner>
      </ContentSection>

      {/* ── Social Reels ── */}
      <ContentSection id="reels" $alt={true} $visible={reelVisible}>
        <SectionInner ref={reelRef}>
          <SectionEyebrow>Instagram</SectionEyebrow>
          <SectionTitle>High Performing Social Reels</SectionTitle>
          <SectionSubtitle>
            Short-form vertical content crafted for platform-native engagement,
            combining storytelling, editing, and audience strategy.
          </SectionSubtitle>
          <Carousel
            responsive={responsiveReels}
            infinite
            keyBoardControl
            containerClass="carousel-container"
          >
            {reelsFeatured.map((url) => (
              <ReelEmbed key={url} url={url} title="Featured Reel" />
            ))}
          </Carousel>
        </SectionInner>
      </ContentSection>

      {/* ── 3D Animation ── */}
      <ContentSection id="animation" $alt={false} $visible={animVisible}>
        <SectionInner ref={animRef}>
          <SectionEyebrow>3D</SectionEyebrow>
          <SectionTitle>3D Animation Reels</SectionTitle>
          <SectionSubtitle>
            Motion graphics and 3D animation work showcasing product
            visualization, motion design, and creative visual storytelling.
          </SectionSubtitle>
          <Carousel
            responsive={responsiveReels}
            infinite
            keyBoardControl
            containerClass="carousel-container"
          >
            {reels3D.map((url) => (
              <ReelEmbed key={url} url={url} title="3D Animation Reel" />
            ))}
          </Carousel>
        </SectionInner>
      </ContentSection>

      {/* ── Contact ── */}
      <ContactSection>
        <HeroOrb1 style={{ opacity: 0.5 }} />
        <ContactCard>
          <ContactEyebrow>Get in touch</ContactEyebrow>
          <ContactTitle>Let's Connect</ContactTitle>
          <ContactText>
            Interested in working together or have a project in mind? Feel free
            to reach out — I'd love to hear from you.
          </ContactText>
          <EmailLink href="mailto:boydisaacq@gmail.com">
            boydisaacq@gmail.com
          </EmailLink>
        </ContactCard>
      </ContactSection>
    </main>
  );
};

export default ContentHighlights;
