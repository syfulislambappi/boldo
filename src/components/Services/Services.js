import React from "react";
import { Section, SubTitle, ServiceContainer, Heading } from "./styles";
import { Container } from "../../globalStyles";
import serviceData from "../../data/serviceData";
import Service from "../Service/Service";

const Services = () => {
  return (
    <Section>
      <Container>
        <SubTitle>Our Services</SubTitle>
        <Heading>
          Handshake infographic mass market crowdfunding iteration.
        </Heading>
        <ServiceContainer>
          {serviceData.map(({ id, src, title, content }) => (
            <Service key={id} src={src} content={content} title={title} />
          ))}
        </ServiceContainer>
      </Container>
    </Section>
  );
};

export default Services;
