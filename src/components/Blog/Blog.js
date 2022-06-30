import React from "react";
import { Img } from "../../globalStyles";
import {
  BlogItem,
  HeaderContainer,
  Header,
  Date,
  BlogContent,
  AuthorContainer,
  AuthorName,
} from "./styles";

const Blog = ({ date, content, author, authorImg, blogImg }) => {
  return (
    <BlogItem>
      <Img src={blogImg} alt="Blog Image" />
      <HeaderContainer>
        <Header>Category</Header>
        <Date>{date}</Date>
      </HeaderContainer>
      <BlogContent>{content}</BlogContent>
      <AuthorContainer>
        <Img src={authorImg} alt="Author" />
        <AuthorName>{author}</AuthorName>
      </AuthorContainer>
    </BlogItem>
  );
};

export default Blog;
