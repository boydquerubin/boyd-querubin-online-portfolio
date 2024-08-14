import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
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
  margin: 20px 20px;
  border-radius: 15px;
`;

const ContactText = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-top: 1rem;
  line-height: 1.6;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <SectionTitle>My Story</SectionTitle>
      <TextBlock>
        <p>
          I began my professional journey with a Bachelor's Degree in
          Communications, working as a Marketer and Content Creator since early
          2020. Now, as a software engineer, I’m passionate about building
          clean, efficient web applications. With expertise in modern
          technologies like React, Node.js, and more, I strive to create
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
      </TextBlock>
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

      <SectionTitle>Get Connected</SectionTitle>
      <ContactText>
        If you'd like to get in touch, feel free to send me an email at:
        <br />
        <strong>boydisaacq@gmail.com</strong>
        <br />
        I'll get back to you as soon as possible!
      </ContactText>
    </ContactContainer>
  );
};

export default Contact;
