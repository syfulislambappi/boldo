import styled from "styled-components";

export const FooterSection = styled.footer`
  padding-top: 10rem;
  padding-bottom: 11.7rem;
`;

export const FooterContainer = styled.div`
  display: flex;
  gap: 10rem;
  justify-content: space-between;

  @media screen and (max-width: 992px) {
    gap: 7rem;
  }
  @media screen and (max-width: 768px) {
    gap: 5rem;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

export const FooterInfo = styled.div`
  max-width: 30rem;
`;

export const FooterText = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #777;
  margin-bottom: 6.4rem;
  margin-top: 4rem;
`;

export const CopyText = styled(FooterText)`
  margin: 0;
`;
