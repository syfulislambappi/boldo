import styled from "styled-components";

export const FeaturesSection = styled.section`
  background-color: #0a2640;
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
`;

export const FeaturesContainer = styled.div`
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const NumberContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 8.4rem;
  text-align: left;

  @media screen and (max-width: 592px) {
    flex-direction: column;
  }
`;
