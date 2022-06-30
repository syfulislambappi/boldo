import React from "react";
import { Img } from "../../globalStyles";
import { AboutParagraph } from "../AboutHeader/styles";
import { ValueContent, Title, ValueItemCard } from "./styles";

const ValueItem = ({ image, title, text }) => {
  return (
    <ValueItemCard>
      <Img src={image} alt="Value Image" />
      <ValueContent>
        <Title color="#fff">{title}</Title>
        <AboutParagraph color="#f1f1f1">{text}</AboutParagraph>
      </ValueContent>
    </ValueItemCard>
  );
};

export default ValueItem;
