import React from "react";
import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
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
  background-color: #2e3a45;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #666;
    transform: scale(1.05);
  }
`;

const Contact = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("../pages/api/contact.js", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message.");
    }

    e.target.reset();
  };

  return (
    <ContactContainer>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactForm onSubmit={sendEmail}>
        <InputField type="text" name="name" placeholder="Your Name" required />
        <InputField
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <TextAreaField name="message" placeholder="Your Message" required />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
