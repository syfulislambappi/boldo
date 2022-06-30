import styled from "styled-components";

export const BlogItem = styled.div`
  min-width: 22rem;
  max-width: 30rem;
  margin-bottom: 2rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-top: 2.4rem;
  margin-bottom: 1.2rem;
`;

export const Header = styled.span`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #0a2640;
`;
export const Date = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #777;
`;

export const BlogContent = styled.p`
  font-weight: 400;
  font-size: 2rem;
  line-height: 3.2rem;
  color: #000;
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`;

export const AuthorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const AuthorName = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: #000;
`;
