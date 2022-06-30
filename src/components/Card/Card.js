import React from "react";
import { Img } from "../../globalStyles";
import {
  StyledCard,
  AvatarContainer,
  AvatarInfo,
  AvatarName,
  AvatarTitle,
  CardContent,
} from "./styles";

const Card = ({ content, name, title, img }) => {
  return (
    <StyledCard>
      <CardContent>{content}</CardContent>
      <AvatarContainer>
        <Img src={img} alt="Avatar" />
        <AvatarInfo>
          <AvatarName>{name}</AvatarName>
          <AvatarTitle>{title}</AvatarTitle>
        </AvatarInfo>
      </AvatarContainer>
    </StyledCard>
  );
};

export default Card;
