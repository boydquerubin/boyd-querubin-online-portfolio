import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player";

const ContentContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 3rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: left;
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem auto;
`;

const VideoWrapper = styled.div`
  padding: 0.75rem; /* slightly tighter */
  transition: transform 0.25s ease;
  &:hover { transform: scale(1.03); }
`;

const PlayerWrapper = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  @supports not (aspect-ratio: 16 / 9) {
    padding-top: 56.25%;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  inset: 0;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
`;

const ReelOuter = styled.div`
  width: clamp(180px, 22vw, 300px); /* min 180px, prefer ~22vw, max 300px */
  margin: 0 auto;
`;

const ReelWrapper = styled.div`
  position: relative;
  aspect-ratio: 9 / 16;
  @supports not (aspect-ratio: 9 / 16) {
    padding-top: 177.78%;
  }
`;

const ReelFrame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  background: #000;
`;

const toInstagramEmbed = (url) => {
  const match = url.match(/instagram\.com\/reel\/([A-Za-z0-9_\-]+)/i);
  if (!match) return null;
  const id = match[1];
  return `https://www.instagram.com/reel/${id}/embed`;
};

const ReelEmbed = ({ url, title = "Reel" }) => {
  const embed = toInstagramEmbed(url);
  if (!embed) return null;
  return (
    <ReelOuter>
      <ReelWrapper>
        <ReelFrame
          src={embed}
          title={title}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </ReelWrapper>
    </ReelOuter>
  );
};

const ContactText = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-top: 2.5rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: center;
`;

const ContentHighlights = () => {
  const responsiveYouTube = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
    desktop:           { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet:            { breakpoint: { max: 1024, min: 464 },  items: 2 },
    mobile:            { breakpoint: { max: 464,  min: 0 },    items: 1 },
  };

  const responsiveReels = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop:           { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet:            { breakpoint: { max: 1024, min: 600 },  items: 2 },
    mobile:            { breakpoint: { max: 600,  min: 0 },    items: 1 },
  };

  const youtubeVideos = [
    "https://www.youtube.com/watch?v=OLrvD-Jz1oQ",
    "https://www.youtube.com/watch?v=Y1TGu4yvEJg&t=6s",
    "https://www.youtube.com/watch?v=Co3Jlu0ymg0",
    "https://www.youtube.com/watch?v=DmqZSUroVEs&t=151s",
    "https://www.youtube.com/watch?v=-6f-Q4brhpY",
    "https://www.youtube.com/watch?v=0ODeIGjOpnA",
    "https://www.youtube.com/watch?v=gRBfOb2PHgk",
  ];

  const reels3D = [
    "https://www.instagram.com/reel/CkQ0ytPpjce/?hl=en",
    "https://www.instagram.com/reel/CjqikoivHjm/?hl=en",
    "https://www.instagram.com/reel/CoK4q-KLSXd/?hl=en",
    "https://www.instagram.com/reel/ClZDKeTJ-Eu/?hl=en",
    "https://www.instagram.com/reel/Cj-1nilJPdb/?hl=en",
  ];

  const reelsFeatured = [
    "https://www.instagram.com/reel/C3bJqZGukqf/?hl=en",
    "https://www.instagram.com/reel/C4gju2zuwEo/?hl=en",
    "https://www.instagram.com/reel/C3_Lrkyymyf/?hl=en",
    "https://www.instagram.com/reel/C2kiag-L8g1/?hl=en",
    "https://www.instagram.com/reel/C4q2dhvSdr6/?hl=en",
  ];

  return (
    <ContentContainer>
      <SectionTitle>Content Highlights</SectionTitle>
      <SectionDescription>
        Take a look at my video work that captures my path in content creation.
        I enjoy blending storytelling with creative expression through 2D and 3D animation,
        along with videography across different platforms.
      </SectionDescription>

      <CarouselContainer>
        <Carousel responsive={responsiveYouTube}>
          {youtubeVideos.map((url) => (
            <VideoWrapper key={url}>
              <PlayerWrapper>
                <StyledReactPlayer url={url} width="100%" height="100%" controls />
              </PlayerWrapper>
            </VideoWrapper>
          ))}
        </Carousel>
      </CarouselContainer>

      <SectionTitle>High Performing Reels</SectionTitle>
      <CarouselContainer>
        <Carousel responsive={responsiveReels}>
          {reelsFeatured.map((url) => (
            <VideoWrapper key={url}>
              <ReelEmbed url={url} title="Featured Reel" />
            </VideoWrapper>
          ))}
        </Carousel>
      </CarouselContainer>

      <SectionTitle>3D Animation Reels</SectionTitle>
      <CarouselContainer>
        <Carousel responsive={responsiveReels}>
          {reels3D.map((url) => (
            <VideoWrapper key={url}>
              <ReelEmbed url={url} title="3D Animation Reel" />
            </VideoWrapper>
          ))}
        </Carousel>
      </CarouselContainer>      

      <SectionTitle>Connect with me</SectionTitle>
      <ContactText>
        If you'd like to get in touch, feel free to send me an email at:
        <br />
        <strong><a href="mailto:boydisaacq@gmail.com">boydisaacq@gmail.com</a></strong>
        <br />
        I'll get back to you as soon as possible!
      </ContactText>
    </ContentContainer>
  );
};

export default ContentHighlights;
