import styled from "styled-components";
import heroBg from "../../assets/images/hero-bg.png";

export const StyledHeader = styled.header`
  background-image: url(${heroBg});
  background-repeat: no-repeat;
  background-position: top right;
  background-color: #0a2640;
  min-height: 100vh;
  overflow-x: hidden;
  padding-bottom: 2rem;
`;
