import React from "react";
import { AboutText, Container, H2 } from "../../globalStyles";
import { AboutParagraph } from "../AboutHeader/styles";
import {
  ValueSection,
  ValueContainer,
  ValueTextContainer,
  ValueCardContainer,
} from "./styles";
import ValueItem from "../ValueItem/ValueItem";
import value1 from "../../assets/images/value1.png";
import value2 from "../../assets/images/value2.png";
import value3 from "../../assets/images/value3.png";

const Values = () => {
  return (
    <ValueSection>
      <Container>
        <ValueContainer>
          <ValueTextContainer>
            <AboutText color="#fff">Our values</AboutText>
            <H2 color="#fff">Things in we believe</H2>
            <AboutParagraph color="#f1f1f1">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </AboutParagraph>
          </ValueTextContainer>
          <ValueCardContainer>
            <ValueItem
              image={value1}
              title="We are commited."
              text="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
            />
            <ValueItem
              image={value2}
              title="We are responsible."
              text="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
            />
            <ValueItem
              image={value3}
              title="We aim for progress."
              text="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. "
            />
          </ValueCardContainer>
        </ValueContainer>
      </Container>
    </ValueSection>
  );
};

export default Values;
