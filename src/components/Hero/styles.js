import styled from "styled-components";
import { H2, P } from "../../globalStyles";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6.4rem;
  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    gap: 5rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 56.7rem;
  @media screen and (max-width: 992px) {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Heading = styled(H2)`
  color: #fff;
  margin-bottom: 1.6rem;
`;

export const Paragraph = styled(P)`
  margin-bottom: 1.6rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const HeroButton = styled.button`
  outline: none;
  border: ${(props) =>
    props.reverse ? "2px solid #fff" : "2px solid #65E4A3"};
  background-color: ${(props) => (props.reverse ? "transparent" : "#65E4A3")};
  color: ${(props) => (props.reverse ? "#fff" : "#0A2640")};
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.8rem;
  padding: 1.6rem 5.6rem;
  border-radius: 5.6rem;
  cursor: pointer;

  @media screen and (max-width: 992px) {
    padding: 1.6rem 3.6rem;
  }

  @media screen and (max-width: 576px) {
    font-weight: 500;
    font-size: 1.7rem;
    padding: 1rem 3.6rem;
  }
`;

export const HeroImage = styled.div``;
