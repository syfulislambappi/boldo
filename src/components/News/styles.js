import styled from "styled-components";
import bgImage from "../../assets/images/news-bg.png";
import { H2 } from "../../globalStyles";
import { HeroButton } from "../Hero/styles";

export const NewsSection = styled.section`
  padding-top: 12.4rem;
  padding-bottom: 8.4rem;
`;

export const NewsContainer = styled.div`
  background-image: url(${bgImage});
  background-position: top right;
  background-repeat: no-repeat;
  background-color: #0a2640;
  border-radius: 1.2rem;
  padding-top: 7.2rem;
  padding-bottom: 7.2rem;
`;

export const Heading = styled(H2)`
  max-width: 71.6rem;
  color: #fff;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const EmailContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.8rem;
  gap: 2.4rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-left: 4rem;
    margin-right: 4rem;
  }
`;

export const EmailInput = styled.input`
  padding: 1.2rem 3.2rem;
  background-color: #fff;
  outline: none;
  border: 2px solid #fff;
  border-radius: 24rem;
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.2rem;
  color: #000;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const EmailSubmit = styled(HeroButton)`
  background-color: #65e4a3;
  border: 2px solid #65e4a3;
  color: #000;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
