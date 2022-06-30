import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
    }

    html {
        font-size: 62.5%;
    }

    body {
        overflow-x: hidden;
        font-family: "Open Sans", sans-serif;
    }
`;

export const H2 = styled.h2`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 4.8rem;
  color: ${({ color }) => (color ? color : "#000")};
  line-height: 7.2rem;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    line-height: 5.6rem;
  }

  @media screen and (max-width: 576px) {
    font-size: 3rem;
    line-height: 4.6rem;
  }
`;

export const H3 = styled.h3`
  font-family: "Manrope", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3.6rem;
  line-height: 5.6rem;
  padding: 0;
  margin: 0;
  color: #000;

  @media screen and (max-width: 992px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`;

export const P = styled.p`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  padding: 0;
  margin: 0;
  color: #f1f1f1;
`;

export const Img = styled.img`
  max-width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const AboutText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: ${({ color }) => color};
  margin: 0;
  padding: 0;
  margin-bottom: 1.2rem;
`;
