import React from "react";
import { Container, AboutText, H2 } from "../../globalStyles";
import { StyledHeder, HeroContainer, AboutParagraph } from "./styles";
import Navbar from "../Navbar/Navbar";

const AboutHeader = () => {
  return (
    <StyledHeder>
      <Container>
        <Navbar />
        <HeroContainer>
          <AboutText color="#f1f1f1">About</AboutText>
          <H2 color="#fff">
            We love to make great things, things that matter.
          </H2>
          <AboutParagraph color="#f1f1f1">
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </AboutParagraph>
        </HeroContainer>
      </Container>
    </StyledHeder>
  );
};

export default AboutHeader;
