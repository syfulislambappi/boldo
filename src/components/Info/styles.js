import styled from "styled-components";
import { H3 } from "../../globalStyles";

export const InfoSection = styled.div`
  padding-top: 12.4rem;
  padding-bottom: 12.4rem;
`;

export const ImgContainer = styled.div`
  width: 100%;
  margin-bottom: 5.6rem;
  text-align: center;
  & img {
    min-width: 100%;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Heading = styled(H3)`
  max-width: 50rem;
`;

export const FaqContainer = styled.div`
  width: 100%;
`;
