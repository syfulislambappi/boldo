import styled from "styled-components";
import { AboutText } from "../../globalStyles";

export const NumberContainer = styled.div``;

export const Title = styled.p`
  font-family: "Manrope" sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 9.6rem;
  line-height: 5.6rem;
  color: #4fe9a4;
  margin: 0;
  padding: 0;
  margin-bottom: 3.2rem;

  @media screen and (max-width: 992px) {
    font-size: 7.6rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 5.6rem;
    margin-bottom: 1rem;
  }
`;

export const Subtitle = styled(AboutText)`
  margin-bottom: 0;
  font-size: 2rem;
`;
