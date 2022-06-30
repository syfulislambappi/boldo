import React from "react";
import { Container } from "../../globalStyles";
import {
  NewsSection,
  NewsContainer,
  Heading,
  EmailContainer,
  EmailInput,
  EmailSubmit,
} from "./styles";

const News = () => {
  return (
    <NewsSection>
      <Container>
        <NewsContainer>
          <Heading>
            An enterprise template to ramp up your company website
          </Heading>
          <EmailContainer onSubmit={(e) => e.preventDefault()}>
            <EmailInput placeholder="Your email address" />
            <EmailSubmit>Start now</EmailSubmit>
          </EmailContainer>
        </NewsContainer>
      </Container>
    </NewsSection>
  );
};

export default News;
