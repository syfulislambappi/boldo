import styled from "styled-components";

export const List = styled.div`
  margin-top: 6.4rem;
`;

export const Item = styled.div`
  font-size: 1.6rem;
  line-height: 2.8rem;
  font-weight: 600;
  max-width: 50rem;
  padding: 1.6rem 2rem 1.6rem 5.3rem;
  background-color: #fff;
  color: #000;
  display: flex;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0.4rem 3.2rem rgba(0, 0, 0, 0.08);
  border-radius: 0.4rem;
  margin-bottom: 2.4rem;
  transition: 0.4s;

  &:hover {
    background-color: #0a2640;
    color: #fff;
  }
`;

export const Span = styled.p``;
