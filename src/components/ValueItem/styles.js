import styled from "styled-components";
import { Name } from "../TeamCard/styles";

export const ValueItemCard = styled.div`
  margin-bottom: 7.2rem;
  display: flex;
  gap: 5rem;
  align-items: center;
  &:nth-last-child() {
    margin-bottom: 0;
  }
`;

export const ValueContent = styled.div`
  max-width: 60.2rem;
`;

export const Title = styled(Name)`
  color: #fff;
`;
