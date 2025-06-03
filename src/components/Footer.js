import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background-color: #2e3a45;
  text-align: center;
  color: #fff;
  margin-top: auto;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; {new Date().getFullYear()} Boyd Querubin. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
