import React from "react";
import { Container } from "../../globalStyles";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { StyledHeader } from "./styles";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Navbar />
        <Hero />
      </Container>
    </StyledHeader>
  );
};

export default Header;
