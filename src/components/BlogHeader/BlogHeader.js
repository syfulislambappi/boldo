import React from "react";
import { AboutText, Container, H2, Img } from "../../globalStyles";
import {
  BlogHeaderSection,
  BlogContainer,
  BlogTitle,
  PostContainer,
  PostContent,
  PostDate,
  Span,
  BlogAuthor,
} from "./styles";
import Navbar from "../Navbar/Navbar";
import blogHeader from "../../assets/images/blog-header.png";
import authorTiny from "../../assets/images/author-tiny.png";
import blackLogo from "../../assets/images/footer-logo.png";

const BlogHeader = () => {
  return (
    <BlogHeaderSection>
      <Container>
        <Navbar logo={blackLogo} color="#0A2640" border="2px solid #0A2640" />
        <BlogContainer>
          <AboutText color="#0A2640">Blog</AboutText>
          <BlogTitle>Thoughts and words</BlogTitle>
          <PostContainer>
            <Img src={blogHeader} alt="Blog Header" />
            <PostContent>
              <PostDate>
                <Span>Category</Span> November 22, 2021
              </PostDate>
              <H2 color="#000">
                Pitch termsheet backing validation focus release.
              </H2>
              <BlogAuthor>
                <Img src={authorTiny} alt="Author" /> <Span>Chandler Bing</Span>
              </BlogAuthor>
            </PostContent>
          </PostContainer>
        </BlogContainer>
      </Container>
    </BlogHeaderSection>
  );
};

export default BlogHeader;
