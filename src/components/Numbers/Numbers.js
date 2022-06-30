import React from "react";
import { NumberContainer, Title, Subtitle } from "./styles";

const Numbers = ({ title, subtitle }) => {
  return (
    <NumberContainer>
      <Title>{title}</Title>
      <Subtitle color="#f1f1f1">{subtitle}</Subtitle>
    </NumberContainer>
  );
};

export default Numbers;
