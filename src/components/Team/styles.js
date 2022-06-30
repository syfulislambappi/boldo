import styled from "styled-components";

export const TeamSection = styled.section`
  padding-top: 9.6rem;
  padding-bottom: 12rem;
`;

export const TeamContainer = styled.div``;

export const TeamTextContainer = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 5.1rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 5.1rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
