import React from "react";
import { Container, Img } from "../../globalStyles";
import {
  FooterSection,
  FooterContainer,
  FooterInfo,
  FooterText,
  CopyText,
} from "./styles";
import footerLogo from "../../assets/images/footer-logo.png";
import FooterLinks from "../FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterContainer>
          <FooterInfo>
            <Img src={footerLogo} alt="Footer Logo" />
            <FooterText>
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </FooterText>
            <CopyText>All rights reserved.</CopyText>
          </FooterInfo>
          <FooterLinks
            heading="Landings"
            links={["Home", "Products", "Services"]}
          />
          <FooterLinks
            heading="Company"
            links={["Home", "Careers", "Services"]}
          />
          <FooterLinks
            heading="Resources"
            links={["Blog", "Products", "Services"]}
          />
        </FooterContainer>
      </Container>
    </FooterSection>
  );
};

export default Footer;
