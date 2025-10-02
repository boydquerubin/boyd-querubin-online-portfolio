import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const TextBlock = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin: 1rem auto; /* Centers the text block within the parent container */
  line-height: 1.6;
  text-align: left; /* Aligns text within the block to the left */
  max-width: 750px;
`;

const AboutImage = styled.img`
  width: 350px;
  margin: 20px 15px;
  border-radius: 15px;
`;

const AboutText = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1rem;
  line-height: 1.6;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>My Story</SectionTitle>
      <TextBlock>
        <p>
          I started out with a Bachelor’s Degree in Communications and, since 2020, have worked as a marketer and content creator. Along the way, I discovered a passion for software development and began focusing on building web applications. I enjoy working with modern tools like React and Python.
        </p>
        <p>
          Through my online portfolio, I showcase projects that highlight both my technical skills and creative experience.
        </p>
        <p>
          Beyond my professional journey, I’m a husband and father of three. I love playing volleyball, taking on new coding challenges, and spending quality time with my family.
        </p>
      </TextBlock>
      <AboutImage
        id="maddyBoyd"
        src="/assets/MaddyBoyd.jpg"
        alt="Image of Boyd and Maddy"
      />
      <AboutImage
        id="QChildren"
        src="/assets/QChildren.jpg"
        alt="Image of Boyd's children"
      />
    </AboutContainer>
  );
};

export default About;
