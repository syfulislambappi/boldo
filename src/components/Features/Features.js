import React from "react";
import { AboutText, Container, H2 } from "../../globalStyles";
import { FeaturesSection, FeaturesContainer, NumberContainer } from "./styles";
import Numbers from "../Numbers/Numbers";

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <FeaturesContainer>
          <AboutText color="#f1f1f1">Our numbers</AboutText>
          <H2 color="#fff">
            Handshake infographic mass market crowdfunding iteration.
          </H2>
          <NumberContainer>
            <Numbers title="120m" subtitle="Cool feature title" />
            <Numbers title="10.000" subtitle="Cool feature title" />
            <Numbers title="240" subtitle="Cool feature title" />
          </NumberContainer>
        </FeaturesContainer>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
