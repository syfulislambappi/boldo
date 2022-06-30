import React, { useState } from "react";
import {
  Nav,
  LogoContainer,
  LinkMenu,
  LinkContainer,
  Links,
  LoginButton,
  BurgerButtonContainer,
} from "./styles";
import logoImage from "../../assets/images/logo.png";
import { Img } from "../../globalStyles";
import { AiOutlineAlignRight } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = ({ logo, color, background, border }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Nav>
      <LogoContainer to="/">
        <Img src={logo ? logo : logoImage} alt="Logo" />
      </LogoContainer>
      <LinkMenu show={show}>
        <LinkContainer background={background}>
          <Links color={color} to="/blog">
            Blog
          </Links>
          <Links color={color} to="/">
            Services
          </Links>
          <Links color={color} to="/about">
            About
          </Links>
          <LoginButton color={color} border={border} background={background}>
            Log In
          </LoginButton>
        </LinkContainer>
      </LinkMenu>
      <BurgerButtonContainer color={color}>
        {show ? (
          <ImCross onClick={handleShow} />
        ) : (
          <AiOutlineAlignRight onClick={handleShow} />
        )}
      </BurgerButtonContainer>
    </Nav>
  );
};

export default Navbar;
