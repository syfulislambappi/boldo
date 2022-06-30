import styled from "styled-components";
import { H2 } from "../../globalStyles";
import { HeroButton } from "../Hero/styles";

export const Section = styled.section`
  padding-top: 4.4rem;
  padding-bottom: 8.5rem;
`;

export const SubTitle = styled.h5`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #777777;
  text-align: center;
  display: ${({ blog }) => (blog ? "none" : "block")};
`;

export const Heading = styled(H2)`
  text-align: center;
  max-width: 84.2rem;
  margin-bottom: 7.8rem;
  margin-left: auto;
  margin-right: auto;
  display: ${({ blog }) => (blog ? "none" : "block")};
`;

export const BlogHeading = styled(H2)`
  display: ${({ blog }) => (blog ? "block" : "none")};
`;

export const BlogContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4rem;
  margin-top: ${({ blog }) => (blog ? "2rem" : 0)};

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media screen and (max-width: 670px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const BlogButton = styled(HeroButton)`
  border: 2px solid #0a2640;
  color: #0a2640;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;
