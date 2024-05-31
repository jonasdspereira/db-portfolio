import React from "react";
import styled from "styled-components";
import footerimg from "./img-footer.svg";

const FooterContainer = styled.footer`
  background-color: var(--primary-color);
  height: 60px;
  display: flex;
  justify-content: center;
  padding: 10px;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
`;

const FooterImage = styled.img``;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImage src={footerimg} />
    </FooterContainer>
  );
};

export default Footer;
