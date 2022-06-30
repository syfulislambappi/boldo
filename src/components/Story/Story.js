import React from "react";
import { AboutText, Container, H2 } from "../../globalStyles";
import { AboutParagraph } from "../AboutHeader/styles";
import { StorySection, StoryContainer } from "./styles";

const Story = () => {
  return (
    <StorySection>
      <Container>
        <StoryContainer>
          <AboutText color="#777">Our story</AboutText>
          <H2>Handshake infographic mass market crowdfunding iteration.</H2>
          <AboutParagraph color="#777">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.{" "}
          </AboutParagraph>
        </StoryContainer>
      </Container>
    </StorySection>
  );
};

export default Story;
