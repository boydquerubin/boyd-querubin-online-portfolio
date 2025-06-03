import React from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReactPlayer from "react-player/youtube";

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
  max-width: 1200px; /* Adjust this value to set your desired max width */
  margin: 0 auto;
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
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
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
  margin-bottom: 3rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-align: center;
`;

const ContentHighlights = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <ContentContainer>
      <SectionTitle>Content Highlights</SectionTitle>
      <SectionDescription>
        Explore a collection of my video content showcasing my journey in
        content creation. These works emphasize my passion for storytelling and
        creative expression, spanning 2D and 3D animation, as well as
        videography across various platforms.
      </SectionDescription>
      <CarouselContainer>
        <Carousel responsive={responsive}>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=OLrvD-Jz1oQ"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=Y1TGu4yvEJg&amp;t=6s"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=Co3Jlu0ymg0"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=DmqZSUroVEs&t=151s"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=-6f-Q4brhpY"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=0ODeIGjOpnA"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
          <VideoWrapper>
            <PlayerWrapper>
              <StyledReactPlayer
                url="https://www.youtube.com/watch?v=gRBfOb2PHgk"
                width="100%"
                height="100%"
                controls={true}
              />
            </PlayerWrapper>
          </VideoWrapper>
        </Carousel>
      </CarouselContainer>

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
