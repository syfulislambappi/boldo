import React from "react";
import { Container, Img } from "../../globalStyles";
import {
  InfoSection,
  ImgContainer,
  InfoContainer,
  FaqContainer,
  Heading,
} from "./styles";
import infoImg from "../../assets/images/info.png";
import faqData from "../../data/faqData";
import Faq from "../Faq/Faq";

const Info = () => {
  return (
    <InfoSection>
      <Container>
        <ImgContainer>
          <Img src={infoImg} alt="Info" />
        </ImgContainer>
        <InfoContainer>
          <Heading>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </Heading>
          <FaqContainer>
            {faqData.map(({ id, title, body }) => (
              <Faq key={id} title={title} body={body} />
            ))}
          </FaqContainer>
        </InfoContainer>
      </Container>
    </InfoSection>
  );
};

export default Info;
