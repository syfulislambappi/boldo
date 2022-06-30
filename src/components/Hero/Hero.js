import React from "react";
import { Img } from "../../globalStyles";
import {
  HeroContainer,
  HeroContent,
  ButtonContainer,
  HeroButton,
  HeroImage,
  Heading,
  Paragraph,
} from "./styles";
import heroImg from "../../assets/images/hero-graphics.png";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Heading>Save time by building fast with Boldo Template</Heading>
        <Paragraph>
          Funding handshake buyer business-to-business metrics iPad partnership.
          First mover advantage innovator success deployment non-disclosure.
        </Paragraph>
        <ButtonContainer>
          <HeroButton>Buy template</HeroButton>
          <HeroButton reverse>Explore</HeroButton>
        </ButtonContainer>
      </HeroContent>
      <HeroImage>
        <Img src={heroImg} alt="Hero Image" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
