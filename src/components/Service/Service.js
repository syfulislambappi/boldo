import React from "react";
import { Img } from "../../globalStyles";
import { ServiceItem, Title, Content, Button, Span } from "./styles";
import { BsArrowRightShort } from "react-icons/bs";

const Service = ({ src, title, content }) => {
  return (
    <ServiceItem>
      <Img src={src} alt="Service Image" />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Button>
        <Span>Explore</Span> <BsArrowRightShort />
      </Button>
    </ServiceItem>
  );
};

export default Service;
