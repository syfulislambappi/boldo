import styled from "styled-components";
import { HeroButton } from "../Hero/styles";

export const CustomerSection = styled.section`
  padding-bottom: 12rem;
`;

export const CustomerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;
  text-align: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const List = styled.div`
  margin-top: 4rem;
`;

export const Item = styled.div`
  display: flex;
  gap: 2.7rem;
  align-items: center;
  color: #0a2640;
  font-size: 3.6rem;
  margin-bottom: 2.4rem;
`;

export const Span = styled.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #000;
`;

export const Button = styled(HeroButton)`
  background-color: #0a2640;
  color: #fff;
  border: none;
`;
