import styled from "styled-components";

export const BlogHeaderSection = styled.section`
  padding-bottom: 9.6rem;
`;

export const BlogContainer = styled.div`
  padding-top: 7.25rem;
  text-align: center;
`;

export const BlogTitle = styled.h1`
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
  color: #0a2640;
  margin: 0;
  padding: 0;
  margin-bottom: 6.75rem;
`;

export const PostContainer = styled.div`
  display: flex;
  gap: 7rem;
  align-items: center;
  text-align: left;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const PostContent = styled.div``;

export const Span = styled.span`
  display: inline-block;
  margin-right: 1.2rem;
  font-weight: 700;
  color: #0a2640;
`;

export const PostDate = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #777;
  margin-bottom: 1.2rem;
`;

export const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & ${Span} {
    font-weight: 400;
    color: #000;
  }
`;
