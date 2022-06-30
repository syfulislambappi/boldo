import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding-top: 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    padding-top: 3.6rem;
  }
`;

export const LogoContainer = styled(Link)`
  max-width: 100%;
`;

export const LinkMenu = styled.div`
  max-width: 100%;
  @media screen and (max-width: 992px) {
    display: ${(props) => (props.show ? "block" : "block")};
    position: absolute;
    top: 10rem;
    right: ${(props) => (props.show ? "0" : "-20rem")};
    border-radius: 0.5rem;
    overflow: hidden;
    transition: 0.5s;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    background-color: ${({ background }) => (background ? background : "#fff")};
    padding: 2rem;
    align-items: flex-start;
    gap: 1rem;
  }
`;

export const Links = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 1.6rem;
  text-decoration: none;
  line-height: 2.8rem;
  color: ${({ color }) => (color ? color : "#fff")};
  margin-right: 4rem;
  transition: text-decoration 0.3s;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 992px) {
    margin-right: 0;
    color: #0a2640;
  }
`;

export const LoginButton = styled.button`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ color }) => (color ? color : "#0a2640")};
  border: ${({ border }) => (border ? border : "none")};
  outline: none;
  background-color: ${({ background }) => (background ? background : "#fff")};
  padding: 0.8rem 4rem;
  border-radius: 2.4rem;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    color: #fff;
    background-color: #0a2640;
  }
`;

export const BurgerButtonContainer = styled.div`
  display: none;
  color: ${({ color }) => (color ? color : "#fff")};
  font-size: 2.7rem;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    display: block;
  }
`;
