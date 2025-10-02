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
  margin: 0 auto 3rem auto; /* spacing between carousels */
`;

const VideoWrapper = styled.div`
  padding: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 ratio */
`;

const StyledReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
`;

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
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 2 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <ContentContainer>
      <SectionTitle>Content Highlights</SectionTitle>
      <SectionDescription>
        Take a look at my video work that captures my path in content creation.
        I enjoy blending storytelling with creative expression through 2D and 3D animation,
        along with videography across different platforms.
      </SectionDescription>

      {/* Main Highlights Carousel (7 videos) */}
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=OLrvD-Jz1oQ" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=Y1TGu4yvEJg&t=6s" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=Co3Jlu0ymg0" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=DmqZSUroVEs&t=151s" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=-6f-Q4brhpY" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=0ODeIGjOpnA" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.youtube.com/watch?v=gRBfOb2PHgk" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
        </Carousel>
      </CarouselContainer>

      {/* 3D Animation Reels Carousel */}
      <SectionTitle>3D Animation Reels</SectionTitle>
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/Cj-1nilJPdb/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/CkQ0ytPpjce/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/CoK4q-KLSXd/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>

          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/ClZDKeTJ-Eu/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>

          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/CjqikoivHjm/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
        </Carousel>
      </CarouselContainer>

      {/* Instagram Reels Carousel */}
      <SectionTitle>High Performing Reels</SectionTitle>
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/C3bJqZGukqf/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/C4gju2zuwEo/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>

          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/C3_Lrkyymyf/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
          
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/C2kiag-L8g1/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>

          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer url="https://www.instagram.com/reel/C4q2dhvSdr6/?hl=en" width="100%" height="100%" controls />
            </PlayerWrapper>
          </VideoWrapper>
        </Carousel>
      </CarouselContainer>

      {/* Contact Section */}
      <SectionTitle>Get Connected</SectionTitle>
      <ContactText>
        If you'd like to get in touch, feel free to send me an email at:
        <br />
        <strong>
          <a href="mailto:boydisaacq@gmail.com">boydisaacq@gmail.com</a>
        </strong>
        <br />
        I'll get back to you as soon as possible!
      </ContactText>
    </ContentContainer>
  );
};

export default ContentHighlights;
