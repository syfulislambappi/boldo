import styled from "styled-components";
import { H2 } from "../../globalStyles";

export const Section = styled.section`
  padding-top: 8.4rem;
  padding-bottom: 18.5rem;
`;

export const SubTitle = styled.h5`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #777777;
  text-align: center;
`;

export const Heading = styled(H2)`
  text-align: center;
  max-width: 84.2rem;
  margin-bottom: 7.8rem;
  margin-left: auto;
  margin-right: auto;
`;

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 2rem;
  }

  @media screen and (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
