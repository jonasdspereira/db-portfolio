import React from "react";
import styled from "styled-components";
import footerimg from "./img-footer.svg";

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 50px;
  }

  @media (max-width: 480px) {
    height: 40px;
  }
`;

const FooterImage = styled.img`
  width: 250px;

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src={footerimg} alt="Footer Logo" />
    </FooterContainer>
  );
};

export default Footer;
