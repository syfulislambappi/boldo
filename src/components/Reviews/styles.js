import styled from "styled-components";
import { H2 } from "../../globalStyles";

export const ReviewSection = styled.section`
  background-color: #0a2640;
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
`;

export const ReviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 7.2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const Heading = styled(H2)`
  color: #fff;
  max-width: 71.6rem;
`;

export const ReviewButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;
`;

export const PrevButton = styled.button`
  font-size: 3.6rem;
  width: 7.2rem;
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: #fff;
  color: #0a2640;
  border-radius: 50%;
  cursor: pointer;
`;

export const NextButton = styled.button`
  font-size: 3.6rem;
  width: 7.2rem;
  height: 7.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  background-color: #fff;
  color: #0a2640;
  border-radius: 50%;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
