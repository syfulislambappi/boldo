import styled from "styled-components";

export const ServiceItem = styled.div`
  max-width: 30rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h4`
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 3.6rem;
  color: #000;
  margin-top: 2.4rem;
  margin-bottom: 1.2rem;
`;

export const Content = styled.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #777777;
  margin-bottom: 2.8rem;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 16.4rem;
  height: 4.5rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 3.6rem;
  color: #0a260a;
  cursor: pointer;

  &:after {
    content: "";
    position: absolute;
    bottom: -0.8rem;
    left: 0;
    width: 16.4rem;
    height: 0.1rem;
    background-color: #0a260a;
  }
`;

export const Span = styled.span``;
