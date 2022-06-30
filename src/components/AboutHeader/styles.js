import styled from "styled-components";

export const StyledHeder = styled.header`
  background-color: #0a2640;
  padding-bottom: 5.6rem;
`;

export const HeroContainer = styled.div`
  text-align: center;
  margin-top: 9.2rem;
  margin-bottom: 14rem;
  max-width: 88.8rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 4rem;
  padding-right: 4rem;
`;

export const AboutParagraph = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: ${({ color }) => color};
  padding: 0;
  margin: 0;
  margin-top: 1.75rem;
`;
