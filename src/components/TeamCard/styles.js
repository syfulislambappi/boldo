import styled from "styled-components";
import { AboutText } from "../../globalStyles";

export const Card = styled.div`
  max-width: 30rem;
`;

export const Name = styled.h6`
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 4.8rem;
  color: #000;
  margin: 0;
  padding: 0;
  margin-top: 2.4rem;
`;

export const Title = styled(AboutText)`
  margin-top: 1.2rem;
`;
