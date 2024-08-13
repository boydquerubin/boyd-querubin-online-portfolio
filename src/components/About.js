// src/components/About.js
import React from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const AboutText = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1rem;
  line-height: 1.6;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutText>
        I'm a software engineer with a passion for building clean and efficient
        web applications. With experience in modern technologies like React,
        Node.js, and more, I love to create solutions that make people's lives
        easier.
      </AboutText>
    </AboutContainer>
  );
};

export default About;
