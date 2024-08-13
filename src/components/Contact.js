// src/components/Contact.js
import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  color: #333;
`;

const ContactForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const InputField = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextAreaField = styled.textarea`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  height: 150px;
`;

const SubmitButton = styled.button`
  padding: 0.75rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm>
        <InputField type="text" placeholder="Your Name" required />
        <InputField type="email" placeholder="Your Email" required />
        <TextAreaField placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
