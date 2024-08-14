import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const AboutText = styled.div`
  font-size: 1.25rem;
  color: #333;
  margin: 1rem auto; /* Centers the text block within the parent container */
  line-height: 1.6;
  text-align: left; /* Aligns text within the block to the left */
  max-width: 750px;
`;
const AboutImage = styled.img`
  width: 350px;
  margin: 20px 20px;
  border-radius: 15px;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        <p>
          I'm Boyd Querubin, and I began my professional journey with a
          Bachelor's Degree in Communications, working as a Marketer and Content
          Creator since early 2020. Now, as a software engineer, I’m passionate
          about building clean, efficient web applications. With expertise in
          modern technologies like React, Node.js, and more, I strive to create
          solutions that simplify and improve people’s lives.
        </p>
        <p>
          Passionate about technology and innovation, I am currently
          transitioning to a career in software engineering and web development.
          Driven by a love for coding and design, I am actively developing an
          online portfolio to showcase my growing skills in these fields.
        </p>
        <p>
          Outside of my professional interests, I'm a devoted husband and father
          of three wonderful children. I enjoy volleyball, exploring new coding
          challenges, and cherishing moments with my family.
        </p>
      </AboutText>
      <AboutImage
        id="maddyBoyd"
        src="/assets/MaddyBoyd.png"
        alt="Image of Boyd and Maddy"
      />
      <AboutImage
        id="QChildren"
        src="/assets/QChildren.png"
        alt="Image of Boyd's children"
      />
    </AboutContainer>
  );
};

export default About;
