import React from "react";
import {
  Section,
  SubTitle,
  BlogContainer,
  Heading,
  BlogButton,
  BlogHeading,
} from "./styles";
import { Container } from "../../globalStyles";
import blogData from "../../data/blogData";
import Blog from "../Blog/Blog";

const Blogs = ({ blog }) => {
  return (
    <Section>
      <Container>
        <SubTitle blog={blog}>Our Blog</SubTitle>
        <Heading blog={blog}>
          Value proposition accelerator product management venture
        </Heading>
        <BlogHeading blog={blog}>Latest news</BlogHeading>
        <BlogContainer blog={blog}>
          {blog
            ? blogData.map(
                ({ id, date, content, author, authorImg, blogImg }) => (
                  <Blog
                    key={id}
                    date={date}
                    content={content}
                    author={author}
                    authorImg={authorImg}
                    blogImg={blogImg}
                  />
                )
              )
            : blogData
                .slice(0, 3)
                .map(({ id, date, content, author, authorImg, blogImg }) => (
                  <Blog
                    key={id}
                    date={date}
                    content={content}
                    author={author}
                    authorImg={authorImg}
                    blogImg={blogImg}
                  />
                ))}
        </BlogContainer>
        <BlogButton reverse={true}>Load More</BlogButton>
      </Container>
    </Section>
  );
};

export default Blogs;
