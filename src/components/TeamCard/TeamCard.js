import React from "react";
import { Img } from "../../globalStyles";
import { Card, Name, Title } from "./styles";

const TeamCard = ({ image, name, title }) => {
  return (
    <Card>
      <Img src={image} alt="Person" />
      <Name>{name}</Name>
      <Title color="#777">{title}</Title>
    </Card>
  );
};

export default TeamCard;
