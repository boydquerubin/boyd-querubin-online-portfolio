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

// const AboutText = styled.p`
//   font-size: 1.25rem;
//   color: #666;
//   margin-top: 1rem;
//   line-height: 1.6;
//   max-width: 750px;
//   margin-left: auto;
//   margin-right: auto;
// `;

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>My Story</SectionTitle>
      <TextBlock>
        <p>
          I’m a web developer and digital content creator with experience in marketing, multimedia production, and brand-focused web design. My work combines technical development with creative strategy, allowing me to build websites, digital tools, and content that support both user experience and business goals.
        </p>
        <p>          
          I have experience with JavaScript, React, HTML, CSS, video production, social media content, 3D animation, and digital marketing. Whether I’m developing a web application, improving a company website, or creating visual content, I focus on clear communication, thoughtful design, and practical results. 
        </p>
        <p>
          Outside of work, I’m a husband and father, and my family is a big part of what motivates me to keep learning, growing, and building a meaningful career. I’m passionate about using technology and creativity together to help businesses strengthen their online presence, connect with their audience, and create meaningful digital experiences.
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
